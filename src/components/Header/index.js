import './index.css'
import {Link} from 'react-router-dom';

const Header = () => (
    <div className='bg-container'>
        <div className='card-container'>
            <div className='header-details'>
                <img src='https://i.ibb.co/X3ftRj1/store-g1e349520c-1280.png' alt='logo' className='logo-img'/>
                <h1 className='header-heading'>reCycle</h1>
            </div>
            <ul className="nav-items-container">
                <div className='list-container'>
                    <li className="list-item"><Link to="/" className='links'>Home</Link></li>
                    <li className="list-item"><Link to="/about" className='links'>About</Link></li>
                    <li className="list-item"><Link to="/contact" className='links'>Contact</Link></li>
                </div>
            </ul>
        </div>
    </div>
)
export default Header