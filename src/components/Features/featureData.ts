import containers from '../../assets/features/containers.svg';
import network from '../../assets/features/network.svg';
import images from '../../assets/features/images.svg';
import kubernetes from '../../assets/features/kubernetes.svg';
import logs from '../../assets/features/logs.svg';
import metrics from '../../assets/features/metrics.svg';
import prune from '../../assets/features/prune.svg';
import configurations from '../../assets/features/configurations.svg';
import snapshot from '../../assets/features/snapshot.svg';

export interface FeatureRecord { header: string; img: string; info: string; }
export const featureData: readonly FeatureRecord[] = [
    {
      header: 'Container Management',
      img: containers,
      info: 'Create, start, stop, and delete Docker containers all in one place',
    },
    {
      header: 'Network Management',
      img: network,
      info: 'Network support and intuitive visualization for seamless container networking',
    },
    {
      header: 'Image Management',
      img: images,
      info: 'Easily view, run, and remove Docker images and explore vulnerabilities for each image',
    },
    {
      header: 'Container Metrics',
      img: metrics,
      info: 'Access and save metrics related to containers in a dashboard with rich visualizations',
    },
    {
      header: 'Snapshots',
      img: snapshot,
      info: 'View and compare previously captured container metrics',
    },
    {
      header: 'Cluster Metrics',
      img: kubernetes,
      info: 'Access metrics related to Kubernetes clusters in a dashboard with rich visualizations',
    },
    {
      header: 'Detailed Process Logs',
      img: logs,
      info: 'View, search and download process logs related to containers',
    },
    {
      header: 'System Prune',
      img: prune,
      info: 'Clear up unused images or networks to ensure optimized performance',
    },
    {
      header: 'Prometheus Configurations',
      img: configurations,
      info: 'Dynamically configure Prometheus targets to scrape data',
    },
  ];
