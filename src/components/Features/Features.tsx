import React from 'react';
import FeatureCard from './FeatureCard';
import styles from './Features.module.scss';
import containers from '../../assets/features/containers.svg';
import network from '../../assets/features/network.svg';
import images from '../../assets/features/images.svg';
import kubernetes from '../../assets/features/kubernetes.svg';
import logs from '../../assets/features/logs.svg';
import metrics from '../../assets/features/metrics.svg';
import prune from '../../assets/features/prune.svg';
import configurations from '../../assets/features/configurations.svg';
import snapshot from '../../assets/features/snapshot.svg';

import { useInView } from 'react-intersection-observer';
import { useSprings, config } from 'react-spring';

const Features = (): JSX.Element => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  const animations = useSprings(
    9,
    [0, 150, 300, 450, 600, 750, 900, 1050, 1200].map((delay) => ({
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(50px)',
      config: config.slow,
      delay: inView ? delay : 0,
    }))
  );

  const featureData = [
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

  return (
    <div className={styles.featuresContainer} ref={ref}>
      <div className={styles.features}>
        <h1>Features</h1>
        <a
          className={styles.article}
          // update href to current medium article
          href="https://medium.com/@ellissong/docketeer-xix-new-features-in-uncharted-seas-3baf72099488"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read about us on Medium!
        </a>
        <div className={styles.featureCards}>
          {featureData.map((item, index) => (
            <FeatureCard
              key={index}
              header={item.header}
              img={item.img}
              info={item.info}
              animation={animations[index]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
