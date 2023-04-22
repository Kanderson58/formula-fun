import './ResetPage.css';

const ResetPage = ({resetTeam}) => {
  return (
    <div className='reset'>
      <p className='reset-blurb'>Was it as easy as you expected to be a team principal?  Luckily, Formula One drivers are constantly coming and going, and no team keeps the same drivers forever.</p>
      <button className='see-team' onClick={resetTeam}>Try A New Team</button>
    </div>
  )
}

export default ResetPage;