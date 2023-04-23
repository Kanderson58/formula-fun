import PropTypes from 'prop-types';
import './ResetPage.css';

const ResetPage = ({resetTeam, constructor}) => {
  return (
    <div className='reset'>
      {!constructor && <p className='reset-blurb'>Was it as easy as you expected to be a team principal?  Luckily, Formula One drivers are constantly coming and going, and no team keeps the same drivers forever.</p>}
      <button className='see-team new-team' onClick={resetTeam}>Try A New Team</button>
    </div>
  )
}

export default ResetPage;

ResetPage.propTypes = {
  resetTeam: PropTypes.func,
  constructor: PropTypes.bool
};