import { Link } from 'react-router-dom';
import '../assets/css.css'
import Resume from '../assets/RESUME - DIKY ARDIYANTO.pdf'


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
                        <li><a href={Resume} style={{ color: '#5B8FB9', textDecoration: 'none' }} download><p className="hovering2">My Resume</p></a></li>
                        <li><Link to='/myworks' style={{ color: '#5B8FB9', textDecoration: 'none' }}><p className="hovering">My Works</p></Link></li>
                        <li><Link to='/certificate' style={{ color: '#5B8FB9', textDecoration: 'none' }}><p className="hovering2">Certificate</p></Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default NavScrollExample;