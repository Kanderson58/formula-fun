import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getData } from '../../apiCalls';
import './Constructors.css'
import { cleanConstructors } from '../../utilities';
import racecar from '../../images/racecar.gif';

const Constructors = ({allDrivers, drivers, teamName}) => {
  const [constructorRanking, setConstructorRanking] = useState([]);
  const [teamPoints, setTeamPoints] = useState(0);
  const [results, setResults] = useState(false);
  const [error, setError] = useState('');

  const rankings = constructorRanking
    .sort((a, b) => b.points - a.points)
    .map((ranking, index) => 
      <li className={`rank ${ranking.team === teamName ? 'user-team' : 'f1-team'}`} key={index + 1} tabIndex='0'>
        <div className='logo-ranking'><img className='logo' alt={`${ranking.team} logo`} src={ranking.logo ? ranking.logo: racecar}/>{index + 1} - {ranking.team} </div> <p className='pts'>({ranking.points} points)</p>
      </li>)
  
  useEffect(() => {
    const promise = cleanConstructors('rankings/teams?season=2021')
    if(typeof(promise) === 'string') {
      setError(promise);
    } else {
      promise.then(data => setConstructorRanking(data));
    }

    // setConstructorRanking(cleanConstructors());
    
    const combinedPoints = drivers.map(driver => allDrivers.find(driverObj => driverObj.name === driver.name).points);
    setTeamPoints(parseInt(combinedPoints[0]) + parseInt(combinedPoints[1]));
  }, []);
  
  const getRankings = () => {
    if(constructorRanking.length === 10 && !error) {
      constructorRanking.push({points: teamPoints, team: teamName});
    } else if(!error) {
      constructorRanking.find(rank => rank.points === teamPoints).team = teamName;
    } 
    setResults(true);
  }

  return (
    <div className='constructors'>
      {!results && <button className='get-results' onClick={getRankings}>Let's See {teamName}'s Results...</button>}
      {results && !error && <ul className='constructor-rankings'>
        {rankings}
      </ul>}
      {error && <p className='error'>{error}</p>}
    </div>
  )
}

export default Constructors;

Constructors.propTypes = {
  allDrivers: PropTypes.array,
  drivers: PropTypes.array,
  teamName: PropTypes.string
};