import { useState, useEffect } from 'react';
import { getData } from '../../apiCalls';
import './Constructors.css'
import { cleanConstructors } from '../../utilities';

const Constructors = ({drivers, teamName}) => {
  const [constructorRanking, setConstructorRanking] = useState([]);
  const rankings = constructorRanking.map(ranking => <li className='rank' key={ranking.position}>{ranking.position} - {ranking.team} <p className='pts'>({ranking.points} points)</p></li>)

  useEffect(() => {
    cleanConstructors('rankings/teams?season=2021').then(data => setConstructorRanking(data));
    // setConstructorRanking(cleanConstructors());
  }, []);

  return (
    <div className='constructors'>
      <ul className='constructor-rankings'>
        {rankings}
      </ul>
    </div>
  )
}

export default Constructors;