import React from 'react';
import styles from './Demo.module.scss';

interface DemoToggleProps {
  setCurrentGif: (gifIndex: number) => void;
  currentGif: number;
}

const DemoToggle: React.FC<DemoToggleProps> = ({
  setCurrentGif,
  currentGif,
}): React.JSX.Element => {
  const descriptions = [
    'Start, stop, or remove your containers at the click of a button.',
    'View, run, or remove images with ease.',
    'Visualize your package vulnerability information.',
    'Save Scan, Rescan, Compare your scans with a click of a button.',
    'Monitor your container metrics.',
    'View Kubernetes cluster metrics for nodes and kubelets.',
    'Dynamically alter Prometheus targets to customize displayed metrics',
    'Many more options to monitor your metrics.',
  ];

  const handleClick = (gifIndex: number) => {
    setCurrentGif(gifIndex);
  };

  const buttons: string[] = [
    'Containers',
    'Images',
    'Data Visualization',
    'Time-Series',
    'Metrics',
    'Cluster Metrics',
    'Configurations',
    'Others',
  ];

  return (
    <div className={styles.mainContainer}>
      <p className={styles.action}>Click to see a demo of each feature!</p>
      <div className={styles.toggleContainer}>
        {buttons.map((button, index) => (
          <button key={button} type="button" className={styles.toggle} aria-pressed={currentGif === index} onClick={() => handleClick(index)}>
            {button}
          </button>
        ))}
      </div>
      <p className={styles.descriptions}>{descriptions[currentGif]}</p>
    </div>
  );
};

export default DemoToggle;
