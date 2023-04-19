import { useState, useEffect } from 'react';
import { cleanDriverData } from '../../utilities.js';
import './DriversPage.css';

const DriversPage = () => {
  const [chosenDriver, setChosenDriver] = useState(1);
  const [allDrivers, setAllDrivers] = useState([]);
  console.log(chosenDriver)

  useEffect(() => {
    setAllDrivers(cleanDriverData())
    // cleanDriverData().then(data => setAllDrivers(data))
  }, [])

  const allDriversJSX = allDrivers.map(driver => 
    <div className={`ranked-driver ${chosenDriver === driver.position && 'chosen-driver pointer-event'}`} 
      id={`${driver.position}`} 
      key={`${driver.position}`} 
      onClick={(e) => setChosenDriver(parseInt(e.target.id))}
      >
        <p className='pointer-event'>{driver.position}) {driver.name}</p><p className='pointer-event points'> {driver.points} points</p>
        {chosenDriver === driver.position && <span className="material-symbols-outlined driver-arrow">arrow_circle_right</span>}
    </div>)

  return (
    <section className='drivers-page'>
      <div className='full-rankings'>
        <h3>SEASON RANKINGS</h3>
        {allDriversJSX}
      </div>
      <div className='selected-driver'>
        <ul className='driver-info'>
          {/* {allDrivers.find(driver => driver.position === chosenDriver)} */}
        </ul>
        <img 
          src='https://e7.pngegg.com/pngimages/220/542/png-clipart-silhouette-man-silhouette-animals-silhouette-thumbnail.png' 
          className='selected-driver-img' 
          alt='example driver'
        />
      </div>
    </section>
  )
}

export default DriversPage;