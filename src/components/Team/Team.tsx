import React from 'react';
import TeamCard from './TeamCard';
import AllOthers from './AllOthers';
import people from './others';
import styles from './Team.module.scss';
import currDocketeerTeam from './currDocketeerTeam';

const Team = (): React.JSX.Element => {
  return (
    <div className={styles.teamContainer}>
      <h2>Meet The Docketeer Team!</h2>
      <ul role="list" className={styles.docketeerXVIIContainer}>
        {currDocketeerTeam.map((person) => (
          <TeamCard
            key={`${person.name}-${person.github}`}
            img={person.img}
            imgSrcSet={person.imgSrcSet}
            name={person.name}
            linkedin={person.linkedin}
            github={person.github}
          />
        ))}
      </ul>
      <h3>Additional contributors</h3>
      <ul role="list" className={styles.othersContainer}>
        {people.map((person) => (
          <AllOthers
            key={`${person.name}-${person.github}`}
            name={person.name}
            linkedin={person.linkedin}
            github={person.github}
          />
        ))}
      </ul>
    </div>
  );
};

export default Team;
