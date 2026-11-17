import React from 'react';
import styles from './Home.module.scss';
import docker from '../../assets/docketeerlogo.png';


const Home = (): React.JSX.Element => {
  return (
    <div className={styles.homeLoaded}>
      <div className={styles.left}>
        <div className={styles.description}>
          <h1 id="main-content" tabIndex={-1} className={styles.mainTitle}>Introducing Docketeer XX</h1>
          <p>
            Docketeer is a user-friendly container management application with
            intuitive interfaces and visualization tools for Docker containers
            and Kubernetes clusters.
          </p>
          <br />
          <div className={styles.explore}>
            <a href="#features">
              Start Exploring
            </a>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <img src={docker} alt='' width={350} />
      </div>
    </div>
  );
};

export default Home;
