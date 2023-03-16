import './index.scss';
import Tina from '../../assets/images/tina.JPG';
import {Link, NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faUser, faEnvelope, faImage, faSign, faSignIn } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { toBeInvalid } from '@testing-library/jest-dom/dist/matchers';

const Sidebar=()=>{
    return(
        <div className="nav-bar">
            <Link className="logo" to="/">
               <img src={Tina} alt="Tiantian Sun" />
            </Link>

            <nav>
                {/* navlink is a tag */}
                <NavLink exact='true' activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4d" /> 
                </NavLink>

                <NavLink exact='true' activeclassname="active" to="/about" className="about-link">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4d" />
                </NavLink>

                <NavLink exact='true' activeclassname="active" to="/portfolio" className="portfolio-link">
                    <FontAwesomeIcon icon={faImage} color="#4d4d4d" />
                </NavLink>

                <NavLink exact='true' activeclassname="active" to="/contact" className="contact-link">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4d" />
                </NavLink>

                

                {/* <NavLink exact='true' activeclassname="active" to="/todolist" className="todolist-link">
                    <FontAwesomeIcon icon={faSignIn} color="#4d4d4d" />
                </NavLink> */}


            </nav>
            <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href="http://linkedin.com/in/tiantian-sun-76610325a">
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4d" />
                    </a>
                </li>

                {/* <li>
                    <a target="_blank" rel="noreferrer" href="http://twitter.com">
                        <FontAwesomeIcon icon={faTwitter} color="#4d4d4d" />
                    </a>
                </li>

                <li>
                    <a target="_blank" rel="noreferrer" href="http://instagram.com">
                        <FontAwesomeIcon icon={faInstagram} color="#4d4d4d" />
                    </a>
                </li> */}

                <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/TinaSun666/TinaProject.git">
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4d" />
                    </a>
                </li>

               
            </ul>
        </div>

    )
}

export default Sidebar;