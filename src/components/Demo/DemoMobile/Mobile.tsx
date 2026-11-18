import { demos } from '../demoData';
import DemoMedia from '../DemoMedia';
import styles from '../Demo.module.scss';

interface MobileProps { current: number; onChange: (index: number) => void; }

export default function Mobile({ current, onChange }: MobileProps) {
  const demo = demos[current];
  const title = demo.mobileTitle ?? demo.title;
  const move = (direction: number) => {
    const next = (current + direction + demos.length) % demos.length;
    onChange(next);
  };
  return <div>
    <DemoMedia key={demo.mobileMedia.src} title={title} className={styles.gifMobile} media={demo.mobileMedia} />
    <div aria-live="polite">{title}</div>
    <div className={styles.gifMobileButtonsBox}>
      <button type="button" className={styles.gifMobileButtons} aria-label="Previous demo" onClick={() => move(-1)}>&larr;</button>
      <button type="button" className={styles.gifMobileButtons} aria-label="Next demo" onClick={() => move(1)}>&rarr;</button>
    </div>
    <p className={styles.mobileDesc}>{demo.description}</p>
  </div>;
}
