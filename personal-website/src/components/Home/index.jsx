import './index.scss';
import logoBP from '../../assets/images/logo-s.png';
import Tilt from 'react-parallax-tilt';
import Background from './Background';
import Loader from 'react-loaders';

const Home = () => {
    return(
        <>
            <div className='home-page'>
                <div className="text-container">
                    <h1>Front-End web Developer </h1>
                    <p>Hi &#128075;! I'm Bohdan Putiak. A passionate Front-End Developer, who wants to begin his journey in tech.</p>
                </div>
                <div className="tilt-container">
                    <Tilt>
                        <div className='logo-container'>
                            <img src={logoBP} alt="" />
                        </div>
                    </Tilt>
                </div>
                <Background />
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Home;