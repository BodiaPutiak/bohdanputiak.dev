import './index.scss';
import chatApp from '../../assets/demos/chatApp.mp4';
import Loader from 'react-loaders';
import AmazonClone from '../../assets/demos/AmazonClone.mp4';
import cs50finalProject from '../../assets/demos/cs50finalProject.mp4';
import spotifyMusicController from '../../assets/demos/spotifyMusicController.mp4';
import GymBro from '../../assets/demos/GymBro.mp4'
import Background from '../Home/Background';
import { useLocation, useParams } from 'react-router-dom';
import Project from './Project';
import Preview from './Preview';

const Portfolio = () => {

    const data = {
        cs50FinalProject: {name: 'cs50FinalProject', index: 4, title: 'Final Project in CS50 course', video: cs50finalProject, stack: ['HTML', 'CSS', 'Flask']},
        chatApp: {name: 'ChatApp', index: 1, title: 'Simple Chat App', video: chatApp, stack: ['HTML','CSS', 'JavaScript', 'Fask']},
        amazonClone: {name: 'AmazonClone', index: 2, title: 'Amazone Clone', video: AmazonClone, stack: ['HTML', 'CSS', 'JavaScript']},
        spotifyMusicController: {name: 'SpotifyMusicController', index: 3, title: 'Spotify Music Controller', video: spotifyMusicController, stack: ['HTML','Material UI', 'ReactJS', 'Django', 'Python']},
        GymBro: {name: 'GymBro', index: 4, title: 'GymBro', video: GymBro, stack: ['HTML', 'SCSS', 'ReactJS']}
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
