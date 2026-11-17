import React from 'react';
import styles from './GetStarted.module.scss';
import githubLogo from '../../assets/github-mark/github-mark-white.png';
import dockerhubLogo from '../../assets/dockerhub-mark/04-symbol_light-blue-docker-logo.png';

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
        <div className={styles.githubButton}>
          <a
            className={styles.githubLink}
            href='https://github.com/open-source-labs/Docketeer-Extension'
            target='_blank' rel='noopener noreferrer'>
            GitHub <img className={styles.logo} src={githubLogo} alt=""></img>
          </a>
        </div>
        <div className={styles.githubButton}>
          <a
            className={styles.githubLink}
            href='https://hub.docker.com/extensions/docketeerxiv/docketeer-extension'
            target='_blank' rel='noopener noreferrer'>
            Dockerhub <img className={styles.logo} src={dockerhubLogo} alt=""></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
