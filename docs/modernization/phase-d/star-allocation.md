# Star field allocation assessment

2026-11-17, Phase C source before Phase D. Read-only assessment, not a rendering benchmark.

`src/stars.js` creates 667 stars (`z=-20000; z<20000; z+=60`), each with a separate `SphereGeometry(0.5, 32, 32)`, material and mesh. Installed Three.js reports 1,089 position vertices, 1,984 indexed triangles, and 46,752 bytes across each geometry's typed attribute and index arrays. Thus geometry buffers alone allocate **31,183,584 bytes (29.74 MiB)** and represent **1,323,328 allocated triangles**. This excludes JS objects, materials, driver overhead and GPU copies.

These are allocated triangles, **not triangles rendered each frame**. Frustum culling and camera distance mean many stars are not visible; draw calls and GPU time were not measured. Animation iterates all 667 objects per frame when opted in. Static-by-default behavior avoids continuous animation but still eagerly creates these objects.

Reproduce from an isolated checkout of `47326ca61dd588b3735dedb115488c5d66ce6099` with its lockfile dependencies installed and supported Node runtime. The current Phase D checkout removes Three.js, so this command is intentionally a historical measurement command, not runnable against its new dependency tree:

```sh
node --input-type=module -e 'import {SphereGeometry} from "three"; const g=new SphereGeometry(.5,32,32); const bytes=Object.values(g.attributes).reduce((n,a)=>n+a.array.byteLength,0)+g.index.array.byteLength; console.log({vertices:g.attributes.position.count,triangles:g.index.count/3,bytes,totalBytes:bytes*667});'
```

If retaining Three.js, shared geometry/material removes geometry duplication; instancing requires roughly 42,688 additional matrix bytes (667 × 16 × 4) and can batch draws. Points or Canvas 2D can preserve a starfield while removing sphere complexity, but require visual and interaction validation. A static fallback or deferred initialization trades motion fidelity for lower initial work. Do not remove the animation merely to improve a synthetic score; the owner decides the visual behavior first.

## Approved Phase D implementation

The owner selected lightweight Canvas while preserving a space/star effect. The implementation uses240 perspective points rendered by Canvas2D, caps backing-store DPR at2, preserves static-by-default and explicit Play/Pause behavior, stops for reduced motion or hidden documents, and provides a CSS background when Canvas is unavailable. It is a simpler visual approximation, not pixel-identical Three.js rendering. Three.js and its type package are removed.

The planned runtime comparison records three five-second samples of main-thread task/script duration for paused and playing states on each version. These are whole-page browser observations, not isolated GPU work, process CPU percentages, battery consumption or proof of energy savings. See animation-runtime.mjs and its eventual JSON output.
