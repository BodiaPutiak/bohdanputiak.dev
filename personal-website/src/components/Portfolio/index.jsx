import './index.scss';
import Loader from 'react-loaders';
import AmazonClone from '../../assets/demos/amazon-clone.png';
import spotifyMc from '../../assets/demos/spotifyMC.png';
import EcommerceStore from '../../assets/demos/ecomerce-store.png';
import BookMark from '../../assets/demos/book-mark.png';
import GymBro from '../../assets/demos/gym-bro.png';
import CarRental from '../../assets/demos/car-rental-img.png'
import Background from '../Home/Background';
import { useLocation, useParams } from 'react-router-dom';
import Project from './Project';
import Preview from './Preview';

const Portfolio = () => {

    const data = {
        amazonClone: {name: 'AmazonClone', index: 1, title: 'Amazone Clone', img: AmazonClone, imgClass: 'amaz', stack: ['HTML', 'CSS', 'Vanilla JavaScript']},
        spotifyMusicController: {name: 'SpotifyMusicController', index: 2, title: 'Spotify Music Controller', img: spotifyMc, imgClass: '', stack: ['HTML','Material UI', 'ReactJS', 'Django', 'Python']},
        GymBro: {name: 'GymBro', index: 3, title: 'GymBro', img: GymBro, imgClass: 'gym', stack: ['HTML', 'SCSS', 'ReactJS']},
        EcommerceStore: {name: 'EcommerceStore', index: 4, title: 'Minimalist Ecommerce Store', img: EcommerceStore, imgClass: 'ecomm', stack: ['HTML', 'SCSS', 'ReactJS']},
        BookMark: {name: 'BookMark', index: 5, title: 'BookMark Langing Page', img: BookMark, imgClass: 'book', stack: ['HTML', 'SCSS', 'ReactJS']},
        CarRental: {name: 'CarRental', index: 6, title: 'Website for car rental service', img: CarRental, imgClass: 'rental', stack: ['HTML', 'SCSS', 'ReactJS']}
    };
    const location = useLocation();
    const { projectName } = useParams();

   
    const renderPortfolio = () => {
        return(
            <div className='container portfolio-page'>
                <div className="grid-container">
                    {Object.values(data).map((project) => (
                        <Preview key={project.name} data={project} />
                    ))}
                </div>
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
