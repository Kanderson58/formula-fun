import { useState, useEffect } from 'react';
import { cleanSingleDriver } from '../../utilities';
import './Driver.css';

const Driver = ({chosenDriver}) => {
  const [driverInfo, setDriverInfo] = useState({});
  const driverDescription = <p className='blurb'>
    {driverInfo.firstName}, born {driverInfo.birthday} in {driverInfo.birthplace}, drives for his country, {driverInfo.country}.
    {driverInfo.highestFinish == 1 && ` He has achieved P1 in ${driverInfo.numHighest} Grand Prix. `} 
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
    <div className='selected-driver'>
      {driverInfo.name && <ul className='driver-info'>
        {driverInfo.name} <span className='number'>#{driverInfo.number}</span>
        {driverDescription}
        <li className='single'>Career Points: {driverInfo.careerPoints}</li>
        <li className='single'>Total Races: {driverInfo.totalRaces}</li>
        <li className='single'>Total Podiums: {driverInfo.totalPodiums}</li>
        <li className='single'>Driven For: {driverInfo.totalTeams} teams</li>
        <li className='single'>Highest Finish: P{driverInfo.highestFinish}</li>
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