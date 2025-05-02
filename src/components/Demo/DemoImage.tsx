import React from 'react';
import styles from './Demo.module.scss';
import containers from '../../assets/demos/ContainersFilters_v20.gif';
import images from '../../assets/demos/Images_v20.gif';
import images2 from '../../assets/demos/imageTab2-new.gif';
import images3 from '../../assets/demos/imageTab3-new.gif';
import metrics from '../../assets/demos/ContainersMetrics_v20.gif';
import k8 from '../../assets/demos/KubernetesClusterHealthMetrics_v20.gif';
import others from '../../assets/demos/Navigation_v20.gif';
import configuration from '../../assets/demos/Configurations_v20.png';

interface DemoGifProps {
  currentGif: number;
}

const DemoImage: React.FC<DemoGifProps> = ({ currentGif }): JSX.Element => {
  const gifs = [
    containers,
    images,
    images2,
    images3,
    metrics,
    k8,
    configuration,
    others,
  ];

  return (
    <div className={styles.gifContainer}>
      <img className={styles.gifs} src={gifs[currentGif]}></img>
    </div>
  );
};

export default DemoImage;
