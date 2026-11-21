import { demos } from './demoData';
import DemoMedia from './DemoMedia';
import styles from './Demo.module.scss';

export default function DemoImage({ currentGif }: { currentGif: number }) {
  const demo = demos[currentGif];
  return <div className={styles.gifContainer}>
    <DemoMedia key={demo.media.src} title={demo.title} className={styles.gifs} media={demo.media} />
  </div>;
}
