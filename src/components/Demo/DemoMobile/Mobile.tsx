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
    <div aria-live="polite">{title}<span className={styles.position}>{current + 1} of {demos.length}</span></div>
    <div className={styles.gifMobileButtonsBox}>
      <button type="button" className="siteButton" aria-label="Previous demo" onClick={() => move(-1)}><span aria-hidden="true">&larr;</span> Previous</button>
      <button type="button" className="siteButton" aria-label="Next demo" onClick={() => move(1)}>Next <span aria-hidden="true">&rarr;</span></button>
    </div>
    <p className={styles.mobileDesc}>{demo.description}</p>
  </div>;
}
