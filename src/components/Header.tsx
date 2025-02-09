import './Header.css';
import './Button.css';
import {NavLink} from 'react-router-dom';
function Header() {
  return (
    <header>
        <div className="header">
            <ul className='header-list'>
                <li><NavLink className='btn' to='.'>All Superheroes</NavLink></li>
                <li><NavLink className='btn' to='add'>Add Superhero</NavLink></li>
            </ul>
        </div>
    </header>
  )
}

export default Header