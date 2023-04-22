import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Driver from '../Driver/Driver';
import DefaultDriver from '../DefaultDriver/DefaultDriver';
import Constructors from '../Constructors/Constructors';
import './TeamPage.css';

const TeamPage = ({allDrivers, drivers, setDrivers, teamName, setTeamName}) => {
  const [editMode, setEditMode] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setEditMode(false);
  }, [teamName])

  const editName = () => {
    setEditMode(true);
  }

  const editNameEnter = (e) => {
    return e.keyCode === 13 ? setEditMode(true) : null
  }
  
  const submitTeamName = (e) => {
    e.preventDefault();
    if(e.target.previousSibling.value) {
      setTeamName(e.target.previousSibling.value);
      setEditMode(false);
    } else {
      e.target.previousSibling.placeholder = 'Please choose a team name';
    }
  }

  return (
    <section className='team-page'>
      <section className='drivers'>

        {!drivers[0] && !error && <DefaultDriver setError={setError} allDrivers={allDrivers} drivers={drivers} setDrivers={setDrivers} />}
        {drivers[0] && !error && <Driver setError={setError} chosenDriver={drivers[0]}/>}
   
        {!drivers[1] && drivers[0] && !error && <DefaultDriver setError={setError} allDrivers={allDrivers} drivers={drivers} setDrivers={setDrivers}/>}
        {drivers[1] && !error && <Driver setError={setError} chosenDriver={drivers[1]}/>}
        {error && <p className='error'>{error}</p>}

      </section>
      {drivers.length === 2 && <div className='team'>
        <div className='team-info'>

          {!editMode && <div className='team-header' tabIndex='0'>
            {!teamName && <h2>Give Your Team A Name!</h2>}<h2>{teamName}</h2><span className='material-symbols-outlined edit' onClick={editName} onKeyUp={(e) => editNameEnter(e)} tabIndex='0'>edit</span>
          </div>}

          {editMode && <div className='team-header edit-mode' tabIndex='0'>
            <input type='text' placeholder={teamName} maxLength='50' className='name-input' required />
            <input type='submit' className='name-submit' onClick={(e) => submitTeamName(e)} />
          </div>}

          {teamName && !editMode && <Constructors allDrivers={allDrivers} drivers={drivers} teamName={teamName} editMode={editMode} />}
        </div>
      </div>}
    </section>
  )
}

export default TeamPage;

TeamPage.propTypes = {
  allDrivers: PropTypes.array, 
  drivers: PropTypes.array, 
  setDrivers: PropTypes.func, 
  teamName: PropTypes.string, 
  setTeamName: PropTypes.func
};