import { useEffect, useState } from 'react';
import DemoToggle from './DemoToggle';
import DemoImage from './DemoImage';
import Mobile from './DemoMobile/Mobile';
import styles from './Demo.module.scss';

export default function Demo() {
  const [currentGif, setCurrentGif] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 700);
  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 700);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return <div className={styles.demoDisplayLoaded}>
    <h2 className={styles.title}>See Docketeer in Action</h2>
    {isSmallScreen ? <Mobile current={currentGif} onChange={setCurrentGif} /> : <div className={styles.demoContainer}>
      <DemoToggle setCurrentGif={setCurrentGif} currentGif={currentGif} />
      <DemoImage currentGif={currentGif} />
    </div>}
  </div>;
}
