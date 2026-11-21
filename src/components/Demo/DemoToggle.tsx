import { demos } from './demoData';
import styles from './Demo.module.scss';

interface DemoToggleProps { currentGif: number; setCurrentGif: (index: number) => void; }
export default function DemoToggle({ currentGif, setCurrentGif }: DemoToggleProps) {
  return <div className={styles.mainContainer}>
    <p className={styles.action}>Click to see a demo of each feature!</p>
    <div className={styles.toggleContainer}>
      {demos.map((demo, index) => <button key={demo.id} type="button" className={`siteButton ${styles.toggle}`}
        aria-pressed={currentGif === index} onClick={() => setCurrentGif(index)}>{demo.title}</button>)}
    </div>
    <p className={styles.descriptions}>{demos[currentGif].description}</p>
  </div>;
}
