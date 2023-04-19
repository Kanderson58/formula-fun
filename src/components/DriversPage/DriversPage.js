import { useState } from 'react';
import './DriversPage.css';

const DriversPage = () => {
  const [chosenDriver, setChosenDriver] = useState('1');
  const [allDrivers, setAllDrivers] = useState(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']);
  const allDriversJSX = allDrivers.map(driver => <p className={`ranked-driver ${chosenDriver === driver && 'chosen-driver'}`} id={`${driver}`} key={`${driver}`} onClick={(e) => setChosenDriver(e.target.id)}>Driver {`${driver}`}{chosenDriver === driver && <span className="material-symbols-outlined driver-arrow">arrow_circle_right</span>}</p>)

  return (
    <section className='drivers-page'>
      <div className='full-rankings'>
        {allDriversJSX}
      </div>
      <div className='selected-driver'>
        <ul className='driver-info'>
          <li>Driver name</li>
          <li>Info that can go right on over this guy's head whenever we need it to</li>
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