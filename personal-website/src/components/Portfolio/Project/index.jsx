import './index.scss';
import { useParams } from 'react-router-dom';
import AmazonClone from '../../../assets/demos/amazon-clone.png';
import spotifyMc from '../../../assets/demos/spotifyMC.png'
import GymBro from '../../../assets/demos/gym-bro.png';
import EcommerceStore from '../../../assets/demos/ecomerce-store.png'
const Project = () => {
    const { projectName } = useParams();


    const renderAmazonClone = () => {
        return(
            <div className='project-container'>
                <div className='img-container'>
                    <img className='amaz' src={AmazonClone} />
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
            </div>
        )
    }

    const renderSpotifyPlayer = () => {
        return(
            <div className='project-container'>
                <div className='img-container'>
                  <img src={spotifyMc} />
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
            </div>
        )
    }

    const renderGymBro = () => {
        return(
            <div className='project-container'>
                <div className='img-container'>
                    <img className='gym' src={GymBro} />
                </div>
                <div className="text-container">
                    <h1>
                        GymBro 
                    </h1>
                    <div className="link-container">
                        <a  target='_blank' href='https://gymbro.pages.dev/'>LIVE DEMO</a>
                        <a  target='_blank' href="https://github.com/BodiaPutiak/GymBro">GitHub repository</a>
                    </div>
                    <p>
                        I am thrilled to present a project I've been diligently crafting using React, HTML, and SCSS. This endeavor showcases my expertise in web development and provides a glimpse into my journey of growth in this field.

                        This project demonstrates my proficiency in React, a powerful JavaScript library for building dynamic user interfaces. Leveraging HTML and SCSS, I've structured and styled this web application to be both functional and visually captivating.

                        While the project continues to evolve, sharing it here is a vital part of documenting my learning process and showcasing my commitment to continuous improvement. I am dedicated to enhancing this project incrementally, introducing new features and refining its capabilities.

                        I invite you to explore this project and witness its ongoing development. Stay tuned for updates as I enhance its functionality and design. Your feedback and support are immensely valuable as I embark on this exciting development journey.

                        Thank you for visiting my portfolio, and I anticipate sharing more captivating projects with you in the future!
                        
                    </p>
                </div>
            </div>
        )
    }


    const renderEcommerce = () => {
        return(
            <div className='project-container'>
                <div className='img-container'>
                    <img className='ecomm' src={EcommerceStore} />
                </div>
                <div className="text-container">
                    <h1>
                        Ecommerce Store 'bodiashop.com'
                    </h1>
                    <div className="link-container">
                        <a  target='_blank' href='https://ecomerce-store.pages.dev/'>LIVE DEMO</a>
                        <a  target='_blank' href="https://github.com/BodiaPutiak/Ecomerce-store">GitHub repository</a>
                    </div>
                    <p>
                    Introducing my latest project, a minimalist e-commerce store crafted with React, HTML, and SCSS. This sleek and user-friendly online shopping platform showcases my expertise in web development and design. With a clean and intuitive interface, it provides a seamless shopping experience for users.

                    Explore this project to see how I've harnessed the power of React to create dynamic and responsive components, while HTML and SCSS have been meticulously employed to ensure a structured and visually appealing website.

                    Stay tuned for more details about this exciting addition to my portfolio, and thank you for visiting!
                        
                    </p>
                </div>
            </div>
        )
    }
    
    
    if (projectName === 'AmazonClone') {
        return (renderAmazonClone());
    } else if (projectName === 'cs50FinalProject') {
        return (renderCsFinalProject());
    } else if (projectName === 'SpotifyMusicController') {
        return (renderSpotifyPlayer());
    } else if (projectName === 'GymBro') {
        return (renderGymBro());
    } else if (projectName === 'EcommerceStore') {
        return (renderEcommerce())
    }

};

export default Project;
