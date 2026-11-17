import React, { useRef, useLayoutEffect, useState } from 'react';
import DemoToggle from './DemoToggle';
import DemoImage from './DemoImage';
import Mobile from './DemoMobile/Mobile';
import styles from './Demo.module.scss';

const Demo = (): React.JSX.Element => {
  const [currentGif, setCurrentGif] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 700);
  const demoRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          setIsIntersecting(true);
          observer.unobserve(entry.target);
        } else {
          setIsIntersecting(false);
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = demoRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    // Add event listener for the resize event
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 700);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      // Remove event listener when the component unmounts
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className={
        isLoaded && isIntersecting
          ? styles.demoDisplayLoaded
          : styles.demoDisplay
      }
      ref={demoRef}
    >
      <h1 className={styles.title}>See Docketeer in Action</h1>
      {isSmallScreen ? (
        <Mobile />
      ) : (
        <div className={styles.demoContainer}>
          <DemoToggle setCurrentGif={setCurrentGif} currentGif={currentGif} />
          <DemoImage currentGif={currentGif} />
        </div>
      )}
    </div>
  );
};

export default Demo;
