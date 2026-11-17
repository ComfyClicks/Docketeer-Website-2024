import { demos } from './demoData';
import styles from './Demo.module.scss';

export default function DemoImage({ currentGif }: { currentGif: number }) {
  const demo = demos[currentGif];
  return <div className={styles.gifContainer}>
    <img alt={`${demo.title} demo`} className={styles.gifs} src={demo.desktopMedia} />
  </div>;
}
