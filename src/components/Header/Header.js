import './Header.css'
import { Link, useLocation } from 'react-router-dom';
import f1header from '../../images/f1header.png';

const Header = () => {
  const dropdown = <span className="material-symbols-outlined expand">expand_more</span>

  return (
    <header>
      <Link to='/' className='title'>
        <img src={f1header} alt='Formula Fun' className='header-img'/>
        <em className='motto'>For those of us who wheel never get tire-d of Formula One!</em>
      </Link>
      <nav>
        <Link to='/' className='nav-link'>HOME{useLocation().pathname !== '/' ? dropdown : null}</Link>
        <Link to='/team' className='nav-link'>MY TEAM{useLocation().pathname !== '/team' ? dropdown : null}</Link>
        <Link to='/drivers' className='nav-link'>DRIVER STATS{useLocation().pathname !== '/drivers' ? dropdown : null}</Link>
      </nav>
    </header>
  )
}

export default Header;