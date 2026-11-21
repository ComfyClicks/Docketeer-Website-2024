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
    <DemoMedia key={demo.media.src} title={title} className={styles.gifMobile} media={demo.media} />
    <div aria-live="polite">
      <div className={styles.stableText}>
        {demos.map((item, index) => <span key={item.id} aria-hidden={current !== index}>{item.mobileTitle ?? item.title}</span>)}
      </div>
      <span className={styles.position}>{current + 1} of {demos.length}</span>
    </div>
    <div className={styles.gifMobileButtonsBox}>
      <button type="button" className="siteButton" aria-label="Previous demo" onClick={() => move(-1)}><span aria-hidden="true">&larr;</span> Previous</button>
      <button type="button" className="siteButton" aria-label="Next demo" onClick={() => move(1)}>Next <span aria-hidden="true">&rarr;</span></button>
    </div>
    <p className={`${styles.mobileDesc} ${styles.stableText}`}>
      {demos.map((item, index) => <span key={item.id} aria-hidden={current !== index}>{item.description}</span>)}
    </p>
  </div>;
}
