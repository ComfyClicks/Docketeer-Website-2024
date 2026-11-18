import { useState } from 'react';
import type { DemoMediaAsset } from './demoData';
import styles from './DemoMedia.module.scss';

interface DemoMediaProps {
  media: DemoMediaAsset;
  title: string;
  className: string;
}

export default function DemoMedia({ media, title, className }: DemoMediaProps) {
  const [playing, setPlaying] = useState(false);
  return <figure aria-label={`${title} demo`} style={{ margin: 0 }}>
    {media.kind === 'animation' ? <>
      <img className={className} src={playing ? media.src : media.poster}
        alt={`${title} demonstration`} width={media.width} height={media.height}
        loading="lazy" decoding="async" />
      <button className={styles.toggle} type="button" onClick={() => setPlaying(!playing)}>
        {playing ? 'Stop' : 'Play'} {title} demonstration
      </button>
    </> : media.kind === 'video' ? <video
      key={media.src}
      className={className}
      aria-label={`Play ${title} demonstration`}
      controls
      playsInline
      preload="none"
      // Progressive enhancement; preload remains the fallback in other browsers.
      {...{ loading: 'lazy' }}
      width={media.width}
      height={media.height}
      poster={media.poster}
    >
      <source src={media.src} type="video/mp4" />
      <a href={media.src}>Download the {title} demonstration</a>
    </video> : <img
      className={className}
      src={media.src}
      alt={`${title} screenshot`}
      width={media.width}
      height={media.height}
      loading="lazy"
      decoding="async"
    />}
  </figure>;
}
