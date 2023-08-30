import './index.scss';
import { useParams } from 'react-router-dom';
import chatApp from '../../../assets/demos/chatApp.mp4';
import AmazonClone from '../../../assets/demos/AmazonClone.mp4';
import cs50finalProject from '../../../assets/demos/cs50FinalProject.mp4';
import YouTubeClone from '../../../assets/demos/YouTubeClone.mp4';
import spotifyMusicController from '../../../assets/demos/spotifyMusicController.mp4';
import Background from '../../Home/Background';


const Project = () => {
    const { projectName } = useParams();


    const renderAmazonClone = () => {
        return(
            <div className='project-container'>
                <div className='video-container'>
                    <video src={AmazonClone} autoPlay={true} infinite='true'></video>
                </div>
                <div className="text-container">
                    <h1>Amazon Clone</h1>
                    <p>
                        In this project, I've used only HTML, CSS, and vanilla JavaScript. 
                        So you can guess how many HTML templates are just copy pasted. 
                        After completing this project I understood why people use frame-works. 
                        <a target='_blank' href='https://github.com/BodiaPutiak/Amazon-clone'> Here you can check out the source code</a> 
                        (Warning! It'll be not the best one you've ever seen).

                        Most buttons on the navigation bar are not active. 
                        I just wanted to replicate the original nav bar as close as 
                        it was possible for me at that time. The only thing that 
                        you can click on is the cart, as well as, all the functionality inside the cart. 
                        Also, a user can choose the rubric of the product he wants to buy and then choose between 
                        available products. Then he can choose a quantity and add that product to the cart. 
                        Inside the cart, I've implemented the functionality of updating the number of products, 
                        deleting them from the cart, choosing the delivery date, and updating the total based on that kind of activities.
                    </p>
                </div>
                <Background />
            </div>
        )
    }

    const renderMyChat = () => {
        return(
            <div className='project-container'>
                <div className='video-container'>
                    <video src={chatApp} autoPlay={true} infinite='true'></video>
                </div>
                <div className="text-container">
                    <h1>Chat Application</h1>
                    <p>
                        This chat application is the second "full-stack" project that I've built so far. 
                        But this time I had to use a lot more JavaScript to make it work properly and at this part, I struggled the most. 
                        It also uses the Python back-end framework Flask with SQLite database for registration and saving chat history. 
                        Additionally, I used Flask socketio to enable users to send and receive messages in real-time. 

                    </p>
                </div>
                <Background />
            </div>
        )
    }

    const renderCsFinalProject = () => {
        return(
            <div className='project-container'>
                <div className='video-container'>
                    <video src={cs50finalProject} autoPlay='true' infinite='true'></video>
                </div>
                <div className="text-container">
                    <h1>CS50 Finance</h1>
                    <p>
                        This is the final project of the Harvard CS50 course that I took. It is not too complicated but when I was doing it was a bit challenging. 
                        The template and styling for this project were already made so students could concentrate on the logic. Also, the implementation of API was made ahead of time by the course staff.

                        CS50 Finance is a trading platform where users can look up the price of the stock, and buy or sell them. 
                        To start with this application user need to log in or register his account. 
                        The registration process is implemented by using Flask is stored in default SQLite database. 
                        After registration or logging in, you are redirected to the main page where are displayed all the stocks 
                        that the user has and a history page where are all the stocks that the user bought or sold. 
                        Also, in this project, I've used Flask session to save users' information 
                        for some period of time, so they didn't have to fill in their information every time they use CS50 Finance.
                    </p>
                </div>
                <Background />
            </div>
        )
    }
    const renderSpotifyPlayer = () => {
        return(
            <div className='project-container'>
                <div className='video-container'>
                    <video src={spotifyMusicController} autoPlay='true' infinite='true'></video>
                </div>
                <div className="text-container">
                    <h1>Sptify Music Controller</h1>
                    <p>
                        This is the hardest project that I've done so far. 
                        It is a true full-stack web application. 
                        Under the hood of this project, I used Django as a back-end framework for handling Spotify API calls, 
                        as well as saving data about users' sessions, and ReactJS with Material UI for handling user interface, 
                        as well as styling. 

                        The purpose of this project is to enable different users to change a song that is playing on a particular device 
                        remotely. Users can join the room by using the unique room code and control song that is now playing. 
                        The way they can do this is by voting if they want to skip that particular song or not. 
                        But the creator of the room is allowed to do anything he wants with currently playing song, as well as changing settings of his room.
                    </p>
                </div>
                <Background />
            </div>
        )
    }

    
    if (projectName === 'ChatApp') {
        return renderMyChat();
    } else if (projectName === 'AmazonClone') {
        return (renderAmazonClone());
    } else if (projectName === 'cs50FinalProject') {
        return (renderCsFinalProject());
    } else if (projectName === 'SpotifyMusicController') {
        return (renderSpotifyPlayer());
    }

};

export default Project;
