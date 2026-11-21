import Foundation
import ImageIO
import UniformTypeIdentifiers
let source=CGImageSourceCreateWithURL(URL(fileURLWithPath:CommandLine.arguments[1]) as CFURL,nil)!
let image=CGImageSourceCreateImageAtIndex(source,Int(CommandLine.arguments[2])!,nil)!
let out=CGImageDestinationCreateWithURL(URL(fileURLWithPath:CommandLine.arguments[3]) as CFURL,UTType.png.identifier as CFString,1,nil)!
CGImageDestinationAddImage(out,image,nil); CGImageDestinationFinalize(out)
var centiseconds = 0
for index in 0..<CGImageSourceGetCount(source) {
    let properties = CGImageSourceCopyPropertiesAtIndex(source, index, nil)! as NSDictionary
    let gif = properties[kCGImagePropertyGIFDictionary] as? NSDictionary
    let delay = (gif?[kCGImagePropertyGIFUnclampedDelayTime] ?? gif?[kCGImagePropertyGIFDelayTime]) as? Double ?? 0.01
    centiseconds += max(Int((delay * 100).rounded()), 1)
}
let metadata: [String: Any] = ["frames": CGImageSourceGetCount(source), "durationSeconds": Double(centiseconds) / 100, "width": image.width, "height": image.height]
print(String(data: try JSONSerialization.data(withJSONObject: metadata), encoding: .utf8)!)
