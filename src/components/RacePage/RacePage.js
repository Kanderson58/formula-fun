import { useState } from 'react'
import { Link } from 'react-router-dom'
import './RacePage.css'

const RacePage = ({allDrivers, setTeamDrivers}) => {
  const [drivers, setDrivers] = useState([]);
  const [completeTeam, setCompleteTeam] = useState(false);
  const availableDrivers = allDrivers
    .filter(driver => !drivers.includes(driver.name))
    .map(driver => <option value={driver.name} key={driver.name}>{driver.name}</option>);

  return (
    <section className='race-page'>
      <h1>Welcome to Formula Fun!</h1>
      <p>Get ready to take on the racing world with your very own F1 team!</p>
      {drivers.length !== 2 && <div className='driver-select'>
        Pick your {!drivers.length ? 'first' : 'second'} driver:
        <select defaultValue='default'>
          <option value='default' disabled >Choose your driver...</option>
          {availableDrivers}
        </select>
        <button onClick={(e) => setDrivers([...drivers, e.target.previousSibling.value])}>Sign this driver!</button>
      </div>}
      {drivers.length === 2 && !completeTeam && 
        <div>
          <label htmlFor='name'>Give Your Team A Name</label>
          <input id='name' type='text'/>
          <button onClick={(e) => {
            setTeamDrivers(drivers, e.target.previousSibling.value);
            setCompleteTeam(true);
          }}>Name My Team!</button>
        </div>}
        {completeTeam && <Link to='/team' className='see-team'>Take Me To My Team!!</Link>}
    </section>
  )
}

export default RacePage