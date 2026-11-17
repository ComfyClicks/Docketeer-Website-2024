import React from 'react';
import styles from './Features.module.scss';
import { animated } from '@react-spring/web';

export interface FeatureCardProps {
  header: string;
  img: string;
  info: string;
  animation: unknown;
}

const FeatureCard = ({ animation, header, img, info }): React.JSX.Element => {
  return (
    <animated.div
      className={styles.featureCard}
      style={animation}
      data-testid={'feature-card'}
    >
      <h3>{header}</h3>
      <img className={styles.img} src={img} alt="img" />
      <p>{info}</p>
    </animated.div>
  );
};

export default FeatureCard;
