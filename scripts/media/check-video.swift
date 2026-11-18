// Decode one sample and inspect actual MP4 duration. Usage: swift check-video.swift file.mp4 seconds frame.png
import AVFoundation
import ImageIO
import UniformTypeIdentifiers
let asset = AVURLAsset(url: URL(fileURLWithPath: CommandLine.arguments[1]))
let duration = try await asset.load(.duration)
let generator = AVAssetImageGenerator(asset: asset)
generator.appliesPreferredTrackTransform = true
generator.requestedTimeToleranceBefore = .zero
generator.requestedTimeToleranceAfter = .zero
let sample = try await generator.image(at: CMTime(seconds: Double(CommandLine.arguments[2])!, preferredTimescale: 100))
let output = URL(fileURLWithPath: CommandLine.arguments[3])
let destination = CGImageDestinationCreateWithURL(output as CFURL, UTType.png.identifier as CFString, 1, nil)!
CGImageDestinationAddImage(destination, sample.image, nil)
CGImageDestinationFinalize(destination)
print("duration \(CMTimeGetSeconds(duration)); decoded \(sample.image.width)x\(sample.image.height)")
