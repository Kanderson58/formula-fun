import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { cleanSingleDriver } from '../../utilities';
import './Driver.css';

const Driver = ({chosenDriver}) => {
  const [driverInfo, setDriverInfo] = useState({});
  const driverDescription = <p className='blurb'>
    {driverInfo.firstName} was born {driverInfo.birthday && driverInfo.birthday}{driverInfo.birthplace && ` in ${driverInfo.birthplace}`}{driverInfo.country ? `, and drives for the ${driverInfo.country}.` : '.'}
    {driverInfo.highestFinish === 1 && driverInfo.numHighest && ` He has achieved P1 in ${driverInfo.numHighest} Grand Prix. `} 
    {driverInfo.worldChamp === 1 && ' He is a one-time World Champion. '}
    {driverInfo.worldChamp > 1 && ` He is a World Champion, winning the championship ${driverInfo.worldChamp} times. `}</p>

  useEffect(() => {
    // async function fetchData () {
    //   const singleDriver = await cleanSingleDriver(chosenDriver.name).then(driver => driver[0]);
    //   setDriverInfo(singleDriver);
    // }
    // fetchData();

    setDriverInfo(cleanSingleDriver(chosenDriver.name)[0]);
  }, [chosenDriver])

  return (
    <div className={`selected-driver ${driverInfo.name}`}>
      {driverInfo.name && <ul className='driver-info'>
        {driverInfo.name} <span className='number'>#{driverInfo.number}</span>
        {driverDescription}
        {driverInfo.careerPoints && <li className='single'>Career Points: {driverInfo.careerPoints}</li>}
        {driverInfo.totalRaces && <li className='single'>Total Races: {driverInfo.totalRaces}</li>}
        {driverInfo.totalPodiums && <li className='single'>Total Podiums: {driverInfo.totalPodiums}</li>}
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

Driver.propTypes = { chosenDriver: PropTypes.object };