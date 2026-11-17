import containers from '../../assets/demos/ContainersFilters_v20.gif';
import images from '../../assets/demos/Images_v20.gif';
import images2 from '../../assets/demos/imageTab2-new.gif';
import images3 from '../../assets/demos/imageTab3-new.gif';
import metrics from '../../assets/demos/ContainersMetrics_v20.gif';
import k8 from '../../assets/demos/KubernetesClusterHealthMetrics_v20.gif';
import others from '../../assets/demos/Navigation_v20.gif';
import configuration from '../../assets/demos/Configurations_v20.png';
import mobile_containers from '../../assets/demos/containerTab-new.gif';
import mobile_images1 from '../../assets/demos/imageTab1-new.gif';
import mobile_images2 from '../../assets/demos/imageTab2-new.gif';
import mobile_images3 from '../../assets/demos/imageTab3-new.gif';
import mobile_metrics from '../../assets/demos/metricTab-new.gif';
import mobile_k8 from '../../assets/demos/k8Tab-new.gif';
import mobile_others from '../../assets/demos/hamburgerTab-new.gif';
import mobile_configuration from '../../assets/demos/configuration.gif';

export interface DemoEntry {
  id: string;
  title: string;
  mobileTitle?: string;
  description: string;
  desktopMedia: string;
  mobileMedia: string;
}

// Preserve the existing desktop/mobile media variants until the media audit.
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
