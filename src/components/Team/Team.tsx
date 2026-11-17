import React from 'react';
import TeamCard from './TeamCard';
import AllOthers from './AllOthers';
import people from './others';
import styles from './Team.module.scss';
import currDocketeerTeam from './currDocketeerTeam';

import { useInView } from 'react-intersection-observer';
import { useSprings, config } from '@react-spring/web';

const Team = (): React.JSX.Element => {
  const [refXVII, inViewXVII] = useInView({ threshold: 0.2 });

  const animationsTwo = useSprings(
    8,
    [0, 150, 300, 450, 600].map((delay) => ({
      opacity: inViewXVII ? 1 : 0,
      transform: inViewXVII ? 'translateY(0)' : 'translateY(50px)',
      config: config.slow,
      delay: inViewXVII ? delay : 0,
    }))
  );

  return (
    <div className={styles.teamContainer}>
      <h2>Meet The Docketeer Team!</h2>
      <div className={styles.docketeerXVIIContainer} ref={refXVII}>
        {currDocketeerTeam.map((person, index) => (
          <TeamCard
            key={index}
            img={person.img}
            name={person.name}
            linkedin={person.linkedin}
            github={person.github}
            animation={animationsTwo[index]}
          />
        ))}
      </div>
      <div className={styles.othersContainer}>
        {people.map((person, index) => (
          <AllOthers
            key={index}
            name={person.name}
            linkedin={person.linkedin}
            github={person.github}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
