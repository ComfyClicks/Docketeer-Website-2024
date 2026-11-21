import { useEffect, useRef } from 'react';
import type { FeatureRecord } from './featureData';
import styles from './Features.module.scss';

export default function FeatureCard({ header, img, info }: FeatureRecord) {
  const card = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const element = card.current;
    if (!element || !('IntersectionObserver' in window) || !element.animate) return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let animation: Animation | undefined;
    // Observe once rather than tying progress to scrolling; content stays visible
    // if observation or animation is unavailable.
    const observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      observer.disconnect();
      if (!preference.matches) {
        animation = element.animate([
          { opacity: 0.25, transform: 'translateY(20px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ], { duration: 450, easing: 'ease-out' });
      }
    }, { threshold: 0.15 });
    const stopForReducedMotion = () => {
      if (preference.matches) animation?.cancel();
    };
    preference.addEventListener('change', stopForReducedMotion);
    observer.observe(element);
    return () => {
      observer.disconnect();
      animation?.cancel();
      preference.removeEventListener('change', stopForReducedMotion);
    };
  }, []);

  return <li ref={card} className={styles.featureCard} data-testid="feature-card">
    <h3>{header}</h3>
    <img className={styles.img} src={img} alt="" width="72" height="75" />
    <p>{info}</p>
  </li>;
}
