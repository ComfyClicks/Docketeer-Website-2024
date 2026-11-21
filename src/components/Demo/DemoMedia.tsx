import { useCallback, useEffect, useRef, useState } from 'react';
import type { DemoMediaAsset } from './demoData';
import styles from './Demo.module.scss';

interface DemoMediaProps {
  media: DemoMediaAsset;
  title: string;
  className: string;
}

export default function DemoMedia({ media, title, className }: DemoMediaProps) {
  const frame = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const playbackRequested = useRef(false);
  const [playing, setPlaying] = useState(false);
  const action = playing ? 'Stop' : 'Play';

  const startPlayback = useCallback(() => {
    playbackRequested.current = true;
    const player = video.current;
    if (player) void player.play().catch(() => setPlaying(false));
    else setPlaying(true);
  }, []);

  const stopPlayback = useCallback(() => {
    const player = video.current;
    if (player) {
      player.pause();
      if (player.readyState > 0) player.currentTime = 0;
    }
    setPlaying(false);
  }, []);

  useEffect(() => {
    const preference = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    const container = frame.current;
    if (!preference || !container) return;

    const stopOnReducedMotion = () => {
      if (preference.matches) stopPlayback();
    };
    preference.addEventListener('change', stopOnReducedMotion);

    const observer = typeof IntersectionObserver === 'undefined' ? undefined :
      new IntersectionObserver(([entry]) => {
        if (entry.intersectionRatio < 0.25) return;
        observer?.disconnect();
        if (!preference.matches && !playbackRequested.current) startPlayback();
      }, { threshold: 0.25 });
    observer?.observe(container);

    return () => {
      observer?.disconnect();
      preference.removeEventListener('change', stopOnReducedMotion);
    };
  }, [startPlayback, stopPlayback]);

  return <figure ref={frame} aria-label={`${title} demo`} className={styles.mediaFrame}>
    {media.av1 !== undefined ? <video
      ref={video}
      className={className}
      aria-label={`${title} demonstration`}
      onPlay={() => setPlaying(true)}
      onPause={() => setPlaying(false)}
      onEnded={() => setPlaying(false)}
      muted
      playsInline
      loop
      preload="none"
      // Progressive enhancement; preload remains the fallback in other browsers.
      {...{ loading: 'lazy' }}
      width={media.width}
      height={media.height}
      poster={media.poster}
    >
      <source src={media.av1} type={`video/mp4; codecs="av01.0.${media.av1Level}.08"`} />
      <source src={media.src} type="video/mp4" />
      <a href={media.src}>Download the {title} demonstration</a>
    </video> : <img
      className={className}
      src={playing ? media.src : media.poster}
      alt={`${title} demonstration`}
      width={media.width}
      height={media.height}
      onError={() => setPlaying(false)}
    />}
    <button
      type="button"
      className="siteButton"
      aria-label={`${action} ${title} demonstration`}
      onClick={playing ? stopPlayback : startPlayback}
    >
      <span className={`${styles.playbackIcon} ${playing ? '' : styles.playIcon}`} aria-hidden="true" />
      {action}
    </button>
  </figure>;
}
