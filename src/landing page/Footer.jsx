import "./footer.css";
import logo from "../assets/home/logo.png"
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <div className="outer-container-footer">
            <div className="info-container-footer"> 
                <div className="about-info-footer">
                    <img src={logo} alt="logo" />
                    <div>
                    Intellio is a healthcare solutions firm focused on providing global support that facilitates the governments and organizations in providing the best quality health at the most affordable cost. At Intellio, we bring together a global team that harbors a passion for health access and innovation
                    </div>
                    <div className="social-media-logos">
                    <FontAwesomeIcon icon={faFacebook} size="2xl" />
                    <FontAwesomeIcon icon={faTwitter} size="2xl" />
                    <FontAwesomeIcon icon={faLinkedin} size="2xl"/>
                    <FontAwesomeIcon icon={faInstagram} size="2xl" />
                    </div>
                </div>
                <div className="quick-links">
                <h2>Quick Links</h2>
                <NavLink to='/cryptonews'>Home</NavLink>
                <NavLink to='/forexnews'>About Us</NavLink>
                <NavLink to='/worldnews'>Services</NavLink>
                <NavLink to='/signup'>Contact</NavLink>
                </div>
                <div className="product-portfolio-footer">
                <h2>Our Product Portfolio</h2>
                <NavLink to='/cryptonews'>Medical and Surgical Equipment</NavLink>
                <NavLink to='/forexnews'>Medical Consumables</NavLink>
                <NavLink to='/worldnews'>Laboratary Solutions</NavLink>
                </div>
            </div>
            <div className="copyright-container-footer">
            &copy; 2019 All Right Reserved. Created by Intellio healthcare solutions
            </div>
        </div>
    )
}