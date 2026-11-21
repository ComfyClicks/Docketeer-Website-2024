import React from 'react';
import styles from './GetStarted.module.scss';
import githubLogo from '../../assets/github-mark/github-mark-white.png';
import dockerhubLogo from '../../assets/optimized/dockerhub-14.webp';
import dockerhubLogoMedium from '../../assets/optimized/dockerhub-28.webp';
import dockerhubLogoLarge from '../../assets/optimized/dockerhub-42.webp';

const GetStarted = (): React.JSX.Element => {
  return (
    <div className={styles.getStartedDisplay}>
      <h2>Get Started</h2>
      <p>
        Getting started with Docketeer is easy!
        <br />
        Navigate to our GitHub page and follow our detailed instructions under
        "Installation".
        <br />
        Or find us on the Docker Desktop Extensions Marketplace and simply click
        install.
      </p>
      <div className={styles.buttonContainer}>
        <a
          className="siteButton"
          href='https://github.com/open-source-labs/Docketeer-Extension'
          target='_blank' rel='noopener noreferrer'>
          GitHub <img className={styles.logo} src={githubLogo} alt="" />
        </a>
        <a
          className="siteButton siteButtonPrimary"
          href='https://hub.docker.com/extensions/docketeerxiv/docketeer-extension'
          target='_blank' rel='noopener noreferrer'>
          Dockerhub <img className={styles.logo} src={dockerhubLogo} srcSet={`${dockerhubLogoMedium} 2x, ${dockerhubLogoLarge} 3x`} alt="" width="14" height="10" />
        </a>
      </div>
    </div>
  );
};

export default GetStarted;
