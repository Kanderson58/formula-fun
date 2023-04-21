import { useState, useEffect } from 'react';
import { getData } from '../../apiCalls';
import './Constructors.css'
import { cleanConstructors } from '../../utilities';
import racecar from '../../images/racecar.gif';

const Constructors = ({allDrivers, drivers, teamName}) => {
  const [constructorRanking, setConstructorRanking] = useState([]);
  const [teamPoints, setTeamPoints] = useState(0);
  const [results, setResults] = useState(false);

  const rankings = constructorRanking
    .sort((a, b) => b.points - a.points)
    .map((ranking, index) => 
      <li className={`rank ${ranking.team === teamName ? 'user-team' : 'f1-team'}`} key={index + 1}>
        <div className='logo-ranking'><img className='logo' src={ranking.logo ? ranking.logo: racecar}/>{index + 1} - {ranking.team} </div> <p className='pts'>({ranking.points} points)</p>
      </li>)
  
  useEffect(() => {
    cleanConstructors('rankings/teams?season=2021').then(data => setConstructorRanking(data));
    // setConstructorRanking(cleanConstructors());
    
    const combinedPoints = drivers.map(driver => allDrivers.find(driverObj => driverObj.name === driver.name).points);
    setTeamPoints(parseInt(combinedPoints[0]) + parseInt(combinedPoints[1]));
  }, []);
  
  const getRankings = () => {
    console.log(constructorRanking.length)
    if(constructorRanking.length === 10) {
      constructorRanking.push({points: teamPoints, team: teamName});
    } else {
      constructorRanking.find(rank => rank.points === teamPoints).team = teamName
    }
    setResults(true);
  }

  return (
    <div className='constructors'>
      {!results && <button className='get-results' onClick={getRankings}>Let's See {teamName}'s Results...</button>}
      {results && <ul className='constructor-rankings'>
        {rankings}
      </ul>}
    </div>
  )
}

export default Constructors;