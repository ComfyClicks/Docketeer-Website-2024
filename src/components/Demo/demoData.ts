import containersPoster from '../../assets/demos/optimized/ContainersFilters_v20.webp';
import containersVideo from '../../assets/demos/optimized/ContainersFilters_v20.mp4';
import imagesPoster from '../../assets/demos/optimized/Images_v20.webp';
import imagesVideo from '../../assets/demos/optimized/Images_v20.mp4';
import images2Poster from '../../assets/demos/optimized/imageTab2-new.webp';
import images2Animation from '../../assets/demos/imageTab2-new.gif';
import images3Poster from '../../assets/demos/optimized/imageTab3-new.webp';
import images3Animation from '../../assets/demos/imageTab3-new.gif';
import metricsPoster from '../../assets/demos/optimized/ContainersMetrics_v20.webp';
import metricsVideo from '../../assets/demos/optimized/ContainersMetrics_v20.mp4';
import k8Poster from '../../assets/demos/optimized/KubernetesClusterHealthMetrics_v20.webp';
import k8Video from '../../assets/demos/optimized/KubernetesClusterHealthMetrics_v20.mp4';
import othersPoster from '../../assets/demos/optimized/Navigation_v20.webp';
import othersVideo from '../../assets/demos/optimized/Navigation_v20.mp4';
import configurationPoster from '../../assets/demos/optimized/Configurations_v20.webp';
import mobile_containersPoster from '../../assets/demos/optimized/containerTab-new.webp';
import mobile_containersAnimation from '../../assets/demos/containerTab-new.gif';
import mobile_images1Poster from '../../assets/demos/optimized/imageTab1-new.webp';
import mobile_images1Animation from '../../assets/demos/imageTab1-new.gif';
import mobile_metricsPoster from '../../assets/demos/optimized/metricTab-new.webp';
import mobile_metricsAnimation from '../../assets/demos/metricTab-new.gif';
import mobile_k8Poster from '../../assets/demos/optimized/k8Tab-new.webp';
import mobile_k8Animation from '../../assets/demos/k8Tab-new.gif';
import mobile_othersPoster from '../../assets/demos/optimized/hamburgerTab-new.webp';
import mobile_othersAnimation from '../../assets/demos/hamburgerTab-new.gif';
import mobile_configurationPoster from '../../assets/demos/optimized/configuration.webp';
import mobile_configurationAnimation from '../../assets/demos/configuration.gif';

export type DemoMediaAsset =
  | { kind: 'animation'; src: string; poster: string; width: number; height: number }
  | { kind: 'video'; src: string; poster: string; width: number; height: number }
  | { kind: 'image'; src: string; width: number; height: number };

const containers: DemoMediaAsset = { kind: 'video', src: containersVideo, poster: containersPoster, width: 800, height: 504 };
const images: DemoMediaAsset = { kind: 'video', src: imagesVideo, poster: imagesPoster, width: 800, height: 504 };
const images2: DemoMediaAsset = { kind: 'animation', src: images2Animation, poster: images2Poster, width: 1838, height: 902 };
const images3: DemoMediaAsset = { kind: 'animation', src: images3Animation, poster: images3Poster, width: 1424, height: 954 };
const metrics: DemoMediaAsset = { kind: 'video', src: metricsVideo, poster: metricsPoster, width: 800, height: 504 };
const k8: DemoMediaAsset = { kind: 'video', src: k8Video, poster: k8Poster, width: 800, height: 504 };
const others: DemoMediaAsset = { kind: 'video', src: othersVideo, poster: othersPoster, width: 800, height: 504 };
const configuration: DemoMediaAsset = { kind: 'image', src: configurationPoster, width: 4084, height: 2558 };
const mobile_containers: DemoMediaAsset = { kind: 'animation', src: mobile_containersAnimation, poster: mobile_containersPoster, width: 1456, height: 888 };
const mobile_images1: DemoMediaAsset = { kind: 'animation', src: mobile_images1Animation, poster: mobile_images1Poster, width: 1838, height: 902 };
const mobile_images2 = images2;
const mobile_images3 = images3;
const mobile_metrics: DemoMediaAsset = { kind: 'animation', src: mobile_metricsAnimation, poster: mobile_metricsPoster, width: 1456, height: 888 };
const mobile_k8: DemoMediaAsset = { kind: 'animation', src: mobile_k8Animation, poster: mobile_k8Poster, width: 1456, height: 888 };
const mobile_others: DemoMediaAsset = { kind: 'animation', src: mobile_othersAnimation, poster: mobile_othersPoster, width: 1424, height: 954 };
const mobile_configuration: DemoMediaAsset = { kind: 'animation', src: mobile_configurationAnimation, poster: mobile_configurationPoster, width: 1544, height: 690 };

export interface DemoEntry {
  id: string;
  title: string;
  mobileTitle?: string;
  description: string;
  desktopMedia: DemoMediaAsset;
  mobileMedia: DemoMediaAsset;
}

// Desktop/mobile recordings retain their original workflows and frame timing.
export const demos: readonly DemoEntry[] = [
  { id: 'containers', title: 'Containers', description: 'Start, stop, or remove your containers at the click of a button.', desktopMedia: containers, mobileMedia: mobile_containers },
  { id: 'images', title: 'Images', description: 'View, run, or remove images with ease.', desktopMedia: images, mobileMedia: mobile_images1 },
  { id: 'data-visualization', title: 'Data Visualization', description: 'Visualize your package vulnerability information.', desktopMedia: images2, mobileMedia: mobile_images2 },
  { id: 'time-series', title: 'Time-Series', description: 'Save Scan, Rescan, Compare your scans with a click of a button.', desktopMedia: images3, mobileMedia: mobile_images3 },
  { id: 'metrics', title: 'Metrics', description: 'Monitor your container metrics.', desktopMedia: metrics, mobileMedia: mobile_metrics },
  { id: 'cluster-metrics', title: 'Cluster Metrics', description: 'View Kubernetes cluster metrics for nodes and kubelets.', desktopMedia: k8, mobileMedia: mobile_k8 },
  { id: 'configuration', title: 'Configurations', mobileTitle: 'Configuration', description: 'Dynamically alter Prometheus targets to customize displayed metrics', desktopMedia: configuration, mobileMedia: mobile_configuration },
  { id: 'others', title: 'Others', description: 'Many more options to monitor your metrics.', desktopMedia: others, mobileMedia: mobile_others },
];
