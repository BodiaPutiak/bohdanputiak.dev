import './index.scss';
import Loader from 'react-loaders';
import AmazonClone from '../../assets/demos/amazon-clone.png';
import cs50finalProject from '../../assets/demos/cs50finalProject.png';
import spotifyMc from '../../assets/demos/spotifyMC.png';
import EcommerceStore from '../../assets/demos/ecomerce-store.png';
import GymBro from '../../assets/demos/gym-bro.png';
import Background from '../Home/Background';
import { useLocation, useParams } from 'react-router-dom';
import Project from './Project';
import Preview from './Preview';

const Portfolio = () => {

    const data = {
        cs50FinalProject: {name: 'cs50FinalProject', index: 4, title: 'Final Project of CS50 course', img: cs50finalProject, imgClass: '', stack: ['HTML', 'CSS', 'Flask']},
        amazonClone: {name: 'AmazonClone', index: 2, title: 'Amazone Clone', img: AmazonClone, imgClass: 'amaz', stack: ['HTML', 'CSS', 'Vanilla JavaScript']},
        spotifyMusicController: {name: 'SpotifyMusicController', index: 3, title: 'Spotify Music Controller', img: spotifyMc, imgClass: '', stack: ['HTML','Material UI', 'ReactJS', 'Django', 'Python']},
        GymBro: {name: 'GymBro', index: 4, title: 'GymBro', img: GymBro, imgClass: 'gym', stack: ['HTML', 'SCSS', 'ReactJS']},
        EcommerceStore: {name: 'EcommerceStore', index: 4, title: 'Minimalist Ecommerce Store', img: EcommerceStore, imgClass: 'ecomm', stack: ['HTML', 'SCSS', 'ReactJS']}
    };
    const location = useLocation();
    const { projectName } = useParams();

   
    const renderPortfolio = () => {
        return(
            <div className='container portfolio-page'>

                {Object.values(data).map((project) => (
                    <Preview key={project.name} data={project} />
                ))}
                <Background />
            </div>
        )
    }


    return (
        <>
            {location.pathname.includes(`/portfolio/project/${projectName}`) ? (
                <Project projectName={projectName} />
            ) : (
                renderPortfolio()
            )}
            <Loader type='pacman' />
        </>
    )
}

export default Portfolio;
