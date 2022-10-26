import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="logo-and-title-container">
      <img src="https://i.ibb.co/6ttTZZH/360-F-385672982-d4-Mz24khcg-OUZPywdv-Hj0j-ZPZir-Nt-Ah-M.jpg" alt="storm" className="logo"/>
      <h1 className="title">stOrm</h1>
    </div>
    <div>
      <Link className="route-link" to="/">Home</Link>
      <Link className="route-link" to="/about">About</Link>
      <Link className="route-link" to="/contact">Contact</Link>
    </div>
  </nav>
)

export default Header