import React, { useEffect, useRef, useState } from 'react';
import github from '../../assets/github-mark/github-mark-white.png';
import styles from './Navbar.module.scss';
import docker2 from '../../assets/optimized/navbar-45.webp';
import docker2Medium from '../../assets/optimized/navbar-90.webp';
import docker2Large from '../../assets/optimized/navbar-135.webp';

const sections = [['home', 'Home'], ['features', 'Features'], ['demo', 'Demo'], ['getstarted', 'Get Started'], ['team', 'Team']];

const Navbar = (): React.JSX.Element => {
  const [open, setOpen] = useState(false);
  const navigation = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!navigation.current || typeof ResizeObserver === 'undefined') return;
    const element = navigation.current;
    const update = () => document.documentElement.style.setProperty('--navigation-height', `${element.getBoundingClientRect().height}px`);
    const observer = new ResizeObserver(update);
    observer.observe(element);
    update();
    return () => {
      observer.disconnect();
      document.documentElement.style.removeProperty('--navigation-height');
    };
  }, []);
  const trigger = useRef<HTMLButtonElement>(null);
  const links = useRef<HTMLUListElement>(null);
  const focusedControl = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const mobile = window.matchMedia('(max-width: 1000px)');
    const reset = () => {
      // A CSS breakpoint can hide the focused control before this event runs.
      const active = document.activeElement === document.body ? focusedControl.current : document.activeElement;
      if (mobile.matches && active && links.current?.contains(active)) trigger.current?.focus();
      if (!mobile.matches && active === trigger.current) links.current?.querySelector('a')?.focus();
      setOpen(false);
    };
    mobile.addEventListener('change', reset);
    return () => mobile.removeEventListener('change', reset);
  }, []);

  return (
    <nav ref={navigation} className={styles.navbar} aria-label="Primary"
      onFocus={(event) => { focusedControl.current = event.target as HTMLElement; }}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && open) {
          setOpen(false);
          trigger.current?.focus();
        }
      }}
      onBlur={(event) => {
        if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget as Node)) {
          focusedControl.current = null;
          setOpen(false);
        }
      }}>
      <div className={styles.navbarContainer}>
        <div className={styles.left}>
          <p className={styles.name}>Docketeer</p>
          <img width="45" height="43" src={docker2} srcSet={`${docker2Medium} 2x, ${docker2Large} 3x`} alt="" />
        </div>
        <button ref={trigger} type="button" className={`siteButton ${styles.menuButton}`}
          aria-expanded={open} aria-controls="primary-links" onClick={() => setOpen(!open)}>Menu</button>
        <ul ref={links} id="primary-links" className={`${styles.links} ${open ? styles.open : ''}`}>
          {sections.map(([id, label]) => (
            <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)}>{label}</a></li>
          ))}
          <li><a href="https://github.com/open-source-labs/Docketeer-Extension" aria-label="Docketeer on GitHub" target="_blank" rel="noopener noreferrer">
            <img width="23" height="23" src={github} alt="" />
          </a></li>
          <li><a href="https://www.linkedin.com/company/docketeer/" aria-label="Docketeer on LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg aria-hidden="true"
                  xmlns='http://www.w3.org/2000/svg'
                  width='23'
                  height='23'
                  fill='white'
                  className='bi bi-linkedin'
                  viewBox='0 0 16 16'>
                  <path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z' />
                </svg>

          </a></li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
