import './index.scss';
import Loader from 'react-loaders';
import logoBP from '../../assets/images/logo-s.png';
import Tilt from 'react-parallax-tilt';
import Background from './Background';

const Home = () => {
    return(
        <>
            <div className='home-page'>
                <div className="text-container">
                    <h1>Full-Stack web Developer </h1>
                    <p>Hi &#128075;! I'm Bohdan Putiak. A passionate Full-Stack Developer, who wants to begin his journey in tech. Currently based in Warsaw, Poland. </p>
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