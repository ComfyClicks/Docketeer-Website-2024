import React from 'react';
import FeatureCard from './FeatureCard';
import styles from './Features.module.scss';

import { featureData } from './featureData';

const Features = (): React.JSX.Element => {

  return (
    <div className={styles.featuresContainer}>
      <div className={styles.features}>
        <h2>Features</h2>
        <a
          className={styles.article}
          // update href to current medium article
          href="https://medium.com/@ellissong/docketeer-xix-new-features-in-uncharted-seas-3baf72099488"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read about us on Medium!
        </a>
        <ul role="list" className={styles.featureCards}>
          {featureData.map((item) => (
            <FeatureCard
              key={item.header}
              header={item.header}
              img={item.img}
              info={item.info}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Features;