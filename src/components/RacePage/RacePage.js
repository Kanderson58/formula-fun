import { Link } from 'react-router-dom'
import racecar from '../../images/racecar.gif';
import './RacePage.css'

const RacePage = () => {
  return (
    <section className='race-page'>
      <h1 className='formula-fun'>🏁 Welcome to Formula Fun! 🏁</h1>
      <p>Have you ever thought, "F1 team principals have it easy!  If all I had to do was choose two drivers and attend races, my team would win the constructor's championsip every year."  Let's test that theory!  Get ready to take on the racing world with your very own F1 team!</p>
      <Link to='/team' className='see-team'>Build My Team</Link>
      <div className='racetrack'><img src={racecar} className='racecar' /></div>
    </section>
  )
}

export default RacePage