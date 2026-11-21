import configurationPoster from '../../assets/demos/optimized/recordings/configurations.webp';
import configurationVideo from '../../assets/demos/optimized/recordings/configurations-tight-540p-h264.mp4';
import othersPoster from '../../assets/demos/optimized/recordings/navigation.webp';
import othersVideo from '../../assets/demos/optimized/recordings/navigation-h264.mp4';
import othersAv1 from '../../assets/demos/optimized/recordings/navigation-av1.mp4';
import images2Poster from '../../assets/demos/optimized/recordings/data-visualization.webp';
import images2Video from '../../assets/demos/optimized/recordings/data-visualization-540p-h264.mp4';
import imagesPoster from '../../assets/demos/optimized/recordings/images.webp';
import imagesVideo from '../../assets/demos/optimized/recordings/images-h264.mp4';
import imagesAv1 from '../../assets/demos/optimized/recordings/images-av1.mp4';
import containersPoster from '../../assets/demos/optimized/recordings/containers.webp';
import containersVideo from '../../assets/demos/optimized/recordings/containers-h264.mp4';
import containersAv1 from '../../assets/demos/optimized/recordings/containers-av1.mp4';
import images3Poster from '../../assets/demos/optimized/recordings/time-series.webp';
import images3Video from '../../assets/demos/optimized/recordings/time-series-540p-h264.mp4';
import metricsPoster from '../../assets/demos/optimized/recordings/metrics.webp';
import metricsVideo from '../../assets/demos/optimized/recordings/metrics-h264.mp4';
import metricsAv1 from '../../assets/demos/optimized/recordings/metrics-av1.mp4';
import k8Poster from '../../assets/demos/optimized/recordings/cluster-metrics.webp';
import k8Video from '../../assets/demos/optimized/recordings/cluster-metrics-h264.mp4';
import k8Av1 from '../../assets/demos/optimized/recordings/cluster-metrics-av1.mp4';


export type DemoMediaAsset = {
  src: string;
  width: number;
  height: number;
  poster: string;
} & ({ av1: string; av1Level: string } | { av1?: never; av1Level?: never });

// Main profile, Main tier, 8-bit AV1 at level 3.0.
const compactFrame = { width: 896, height: 504, av1Level: '04M' };
const h264Frame = { width: 960, height: 540 };

const containers: DemoMediaAsset = { ...compactFrame, src: containersVideo, av1: containersAv1, poster: containersPoster };
const images: DemoMediaAsset = { ...compactFrame, src: imagesVideo, av1: imagesAv1, poster: imagesPoster };
const images2: DemoMediaAsset = { ...h264Frame, src: images2Video, poster: images2Poster };
const images3: DemoMediaAsset = { ...h264Frame, src: images3Video, poster: images3Poster };
const metrics: DemoMediaAsset = { ...compactFrame, src: metricsVideo, av1: metricsAv1, poster: metricsPoster };
const k8: DemoMediaAsset = { ...compactFrame, src: k8Video, av1: k8Av1, poster: k8Poster };
const others: DemoMediaAsset = { ...compactFrame, src: othersVideo, av1: othersAv1, poster: othersPoster };
const configuration: DemoMediaAsset = { ...h264Frame, src: configurationVideo, poster: configurationPoster };

export interface DemoEntry {
  id: string;
  title: string;
  mobileTitle?: string;
  description: string;
  media: DemoMediaAsset;
}

export const demos: readonly DemoEntry[] = [
  { id: 'containers', title: 'Containers', description: 'Start, stop, or remove your containers at the click of a button.', media: containers },
  { id: 'images', title: 'Images', description: 'View, run, or remove images with ease.', media: images },
  { id: 'data-visualization', title: 'Data Visualization', description: 'Visualize your package vulnerability information.', media: images2 },
  { id: 'time-series', title: 'Time-Series', description: 'Save Scan, Rescan, Compare your scans with a click of a button.', media: images3 },
  { id: 'metrics', title: 'Metrics', description: 'Monitor your container metrics.', media: metrics },
  { id: 'cluster-metrics', title: 'Cluster Metrics', description: 'View Kubernetes cluster metrics for nodes and kubelets.', media: k8 },
  { id: 'configuration', title: 'Configurations', mobileTitle: 'Configuration', description: 'Dynamically alter Prometheus targets to customize displayed metrics', media: configuration },
  { id: 'others', title: 'Others', description: 'Many more options to monitor your metrics.', media: others },
];
