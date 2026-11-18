// Decode a source GIF and MP4 at the same source frame boundary for visual comparison.
import Foundation
import ImageIO
import UniformTypeIdentifiers
import AVFoundation
let source = CGImageSourceCreateWithURL(URL(fileURLWithPath: CommandLine.arguments[1]) as CFURL, nil)!
let target = Int((Double(CommandLine.arguments[4])! * 100).rounded())
var start = 0
var selected = 0
for index in 0..<CGImageSourceGetCount(source) {
    let properties = CGImageSourceCopyPropertiesAtIndex(source, index, nil)! as NSDictionary
    let gif = properties[kCGImagePropertyGIFDictionary] as! NSDictionary
    let delay = (gif[kCGImagePropertyGIFUnclampedDelayTime] ?? gif[kCGImagePropertyGIFDelayTime]) as? Double ?? 0.01
    let next = start + max(Int((delay * 100).rounded()), 1)
    selected = index
    if next > target { break }
    start = next
}
func save(_ image: CGImage, _ suffix: String) {
    let url = URL(fileURLWithPath: CommandLine.arguments[3] + suffix + ".png")
    let destination = CGImageDestinationCreateWithURL(url as CFURL, UTType.png.identifier as CFString, 1, nil)!
    CGImageDestinationAddImage(destination, image, nil)
    CGImageDestinationFinalize(destination)
}
save(CGImageSourceCreateImageAtIndex(source, selected, nil)!, "-source")
let asset = AVURLAsset(url: URL(fileURLWithPath: CommandLine.arguments[2]))
let generator = AVAssetImageGenerator(asset: asset)
generator.requestedTimeToleranceBefore = .zero
generator.requestedTimeToleranceAfter = .zero
let decoded = try await generator.image(at: CMTime(value: Int64(start), timescale: 100))
save(decoded.image, "-encoded")
print("GIF frame \(selected), source start \(Double(start)/100)s; MP4 actual \(CMTimeGetSeconds(decoded.actualTime))s")
