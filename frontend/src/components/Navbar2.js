import '../assets/Navbar.css'
import '../App.css';
import { Link } from 'react-router-dom';
import MyLogo from '../assets/MyLogo.png'
import '../assets/css.css'


function NavScrollExample() {
    return (
        <>
            <div className="nav">
                <input type="checkbox" id="nav-check" />
                <div className="nav-btn">
                    <label htmlFor="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>

                <div className="nav-links">
                    <ul>
                        <li><Link to="/" style={{ color: '#5B8FB9', textDecoration: 'none' }}><p className="hovering">Home</p></Link></li>
                        <li><Link style={{ color: '#5B8FB9', textDecoration: 'none' }} to='staytuned'><p className="hovering2">My Novel</p></Link></li>
                        <li><Link to='/myworks' style={{ color: '#5B8FB9', textDecoration: 'none' }}><p className="hovering">My Works</p></Link></li>
                        <li><Link to='/certificate' style={{ color: '#5B8FB9', textDecoration: 'none', marginRight: '20px' }}><p className="hovering2">Certificate</p></Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default NavScrollExample;