import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { cleanSingleDriver } from '../../utilities';
import './Driver.css';

const Driver = ({setError, chosenDriver}) => {
  const [driverInfo, setDriverInfo] = useState({});
  const driverDescription = <p className='blurb'>
    {driverInfo.firstName} was born {driverInfo.birthday && driverInfo.birthday}{driverInfo.birthplace && ` in ${driverInfo.birthplace}`}{driverInfo.country ? `, and drives for ${driverInfo.country}.` : '.'}
    {driverInfo.highestFinish === 1 && driverInfo.numHighest && ` He has achieved P1 in ${driverInfo.numHighest} Grand Prix. `} 
    {driverInfo.worldChamp === 1 && ' He is a one-time World Champion. '}
    {driverInfo.worldChamp > 1 && ` He is a World Champion, winning the championship ${driverInfo.worldChamp} times. `}</p>

  useEffect(() => {
    async function fetchData () {
      const singleDriver = await cleanSingleDriver(chosenDriver.name).then(driver => driver[0]);
      typeof(singleDriver) === 'string' ? setError('🚩 Uh oh, red flag!  We could not find that driver.  Please try again later! 🚩') : setDriverInfo(singleDriver);
    }
    fetchData();
  }, [chosenDriver, setError])

  return (
    <div className={`selected-driver ${driverInfo.name}`} tabIndex='0' >
      {driverInfo.name && <ul className='driver-info'>
        {driverInfo.name} <span className='number'>#{driverInfo.number}</span>
        {driverDescription}
        {driverInfo.careerPoints && <li className='single'>Career Points: {driverInfo.careerPoints}</li>}
        {driverInfo.totalRaces && <li className='single'>Total Races: {driverInfo.totalRaces}</li>}
        {driverInfo.totalPodiums ? <li className='single'>Total Podiums: {driverInfo.totalPodiums}</li> : null}
        {driverInfo.totalTeams && <li className='single'>Driven For: {driverInfo.totalTeams} teams</li>}
        {driverInfo.highestFinish && <li className='single'>Highest Finish: P{driverInfo.highestFinish}</li>}
      </ul> }
      {driverInfo.name && <img 
        src={driverInfo.image} 
        className='selected-driver-img' 
        alt='example driver'
      />}
    </div>
  )
}

export default Driver;

Driver.propTypes = { 
  setError: PropTypes.func,
  chosenDriver: PropTypes.object 
};