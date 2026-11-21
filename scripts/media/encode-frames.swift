import Foundation
import AVFoundation
import CoreGraphics
import ImageIO

// ImageIO decodes each full-canvas GIF frame, including disposal/offset compositing.
let sourceURL = URL(fileURLWithPath: CommandLine.arguments[1])
let output = URL(fileURLWithPath: CommandLine.arguments[2])
let source = CGImageSourceCreateWithURL(sourceURL as CFURL, nil)!
let delays: [Int] = (0..<CGImageSourceGetCount(source)).map { index in
    let properties = CGImageSourceCopyPropertiesAtIndex(source, index, nil)! as NSDictionary
    let gif = properties[kCGImagePropertyGIFDictionary] as? NSDictionary
    let seconds = (gif?[kCGImagePropertyGIFUnclampedDelayTime] ?? gif?[kCGImagePropertyGIFDelayTime]) as? Double ?? 0.01
    return max(Int((seconds * 100).rounded()), 1)
}
func frame(_ index: Int) throws -> CGImage {
    guard let image = CGImageSourceCreateImageAtIndex(source, index, [kCGImageSourceShouldCache: false] as CFDictionary) else {
        throw NSError(domain: "FrameDecode", code: index)
    }
    return image
}
let first = try frame(0)
let poster = CGImageDestinationCreateWithURL(URL(fileURLWithPath: CommandLine.arguments[3]) as CFURL, "public.png" as CFString, 1, nil)!
CGImageDestinationAddImage(poster, first, nil)
CGImageDestinationFinalize(poster)
let width = (first.width + 1) / 2 * 2
let height = (first.height + 1) / 2 * 2
let writer = try AVAssetWriter(outputURL: output, fileType: .mp4)
writer.shouldOptimizeForNetworkUse = true
let compression: [String: Any] = [
    AVVideoAverageBitRateKey: 800_000,
    AVVideoProfileLevelKey: AVVideoProfileLevelH264HighAutoLevel,
    AVVideoMaxKeyFrameIntervalKey: 30
]
let settings: [String: Any] = [
    AVVideoCodecKey: AVVideoCodecType.h264,
    AVVideoWidthKey: width,
    AVVideoHeightKey: height,
    AVVideoCompressionPropertiesKey: compression,
    AVVideoColorPropertiesKey: [AVVideoColorPrimariesKey: AVVideoColorPrimaries_ITU_R_709_2,
        AVVideoTransferFunctionKey: AVVideoTransferFunction_ITU_R_709_2,
        AVVideoYCbCrMatrixKey: AVVideoYCbCrMatrix_ITU_R_709_2]
]
let input = AVAssetWriterInput(mediaType: .video, outputSettings: settings)
input.expectsMediaDataInRealTime = false
let bufferAttributes: [String: Any] = [
    kCVPixelBufferPixelFormatTypeKey as String: kCVPixelFormatType_32BGRA,
    kCVPixelBufferWidthKey as String: width,
    kCVPixelBufferHeightKey as String: height,
    kCVPixelBufferCGImageCompatibilityKey as String: true,
    kCVPixelBufferCGBitmapContextCompatibilityKey as String: true
]
let adaptor = AVAssetWriterInputPixelBufferAdaptor(assetWriterInput: input, sourcePixelBufferAttributes: bufferAttributes)
writer.add(input)
guard writer.startWriting() else { throw writer.error! }
writer.startSession(atSourceTime: .zero)
var elapsed: Int64 = 0
for (index, delay) in delays.enumerated() {
    while !input.isReadyForMoreMediaData {
        guard writer.status == .writing else { throw writer.error! }
        Thread.sleep(forTimeInterval: 0.005)
    }
    try autoreleasepool {
        let image = try frame(index)
        var buffer: CVPixelBuffer?
        guard CVPixelBufferPoolCreatePixelBuffer(nil, adaptor.pixelBufferPool!, &buffer) == kCVReturnSuccess, let buffer else { throw NSError(domain: "PixelBuffer", code: index) }
        CVPixelBufferLockBaseAddress(buffer, [])
        let context = CGContext(data: CVPixelBufferGetBaseAddress(buffer), width: width, height: height, bitsPerComponent: 8, bytesPerRow: CVPixelBufferGetBytesPerRow(buffer), space: CGColorSpace(name: CGColorSpace.sRGB)!, bitmapInfo: CGBitmapInfo.byteOrder32Little.rawValue | CGImageAlphaInfo.premultipliedFirst.rawValue)!
        context.setFillColor(CGColor(gray: 0, alpha: 1))
        context.fill(CGRect(x: 0, y: 0, width: width, height: height))
        context.draw(image, in: CGRect(x: 0, y: height - image.height, width: image.width, height: image.height))
        CVPixelBufferUnlockBaseAddress(buffer, [])
        guard adaptor.append(buffer, withPresentationTime: CMTime(value: elapsed, timescale: 100)) else { throw writer.error! }
    }
    elapsed += Int64(max(delay, 1))
}
writer.endSession(atSourceTime: CMTime(value: elapsed, timescale: 100))
input.markAsFinished()
let finished = DispatchSemaphore(value: 0)
writer.finishWriting { finished.signal() }
finished.wait()
guard writer.status == .completed else { throw writer.error! }
let metadata: [String: Any] = ["frames": delays.count, "durationSeconds": Double(elapsed) / 100,
    "width": first.width, "height": first.height, "videoWidth": width, "videoHeight": height]
print(String(data: try JSONSerialization.data(withJSONObject: metadata, options: [.sortedKeys]), encoding: .utf8)!)
