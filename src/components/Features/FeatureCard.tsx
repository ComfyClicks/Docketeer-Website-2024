import type { FeatureRecord } from './featureData';
import styles from './Features.module.scss';

export default function FeatureCard({ header, img, info }: FeatureRecord) {
  return <li className={styles.featureCard} data-testid="feature-card">
    <h3>{header}</h3>
    <img className={styles.img} src={img} alt="" width="72" height="75" />
    <p>{info}</p>
  </li>;
}
