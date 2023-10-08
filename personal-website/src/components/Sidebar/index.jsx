import './index.scss';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faCode, faBars, faX } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => {
    const [show, setShow] = useState('')
    const handleShowNavBar = () => {
        setShow(!show);
    }
    return (
        <>
            <div className="burger-menu" onClick={handleShowNavBar}>
                <FontAwesomeIcon icon={faBars} color='#fff'></FontAwesomeIcon>
            </div>
            <div className={show ? 'nav-bar show' : 'nav-bar'}>
                <Link className='logo' to='/'>
                    <img src={LogoS} alt="logo" />
                </Link>
                <div className="cross" style={{ display: show ? 'block' : 'none' }} onClick={handleShowNavBar}>
                    <FontAwesomeIcon icon={faX} color='#fff'></FontAwesomeIcon>
                </div>
                <nav>
                    <NavLink exact='true' activaclassname='active' to='/'>
                        <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                    </NavLink>
                    <NavLink exact='true' activaclassname='active' className='portfolio-link' to='/portfolio'>
                        <FontAwesomeIcon icon={faCode} color='#4d4d4e' />
                    </NavLink>
                    <NavLink exact='true' activaclassname='active' className='about-link' to='/about'>
                        <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                    </NavLink>
                    <NavLink exact='true' activaclassname='active' className='contact-link' to='/contact'>
                        <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                    </NavLink>
                </nav>
                <ul>
                    <li>
                        <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/bohdan-putiak-2b39ba28a/'>
                            <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                        </a>
                    </li>
                    <li>
                        <a target='_blank' rel='noreferrer' href='https://github.com/BodiaPutiak'>
                            <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar