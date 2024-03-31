import './index.scss';
import { useParams } from 'react-router-dom';
import AmazonClone from '../../../assets/demos/amazon-clone.png';
import spotifyMc from '../../../assets/demos/spotifyMC.png'
import GymBro from '../../../assets/demos/gym-bro.png';
import EcommerceStore from '../../../assets/demos/ecomerce-store.png';
import BookMark from '../../../assets/demos/book-mark.png';
import CarRental from '../../../assets/demos/car-rental-img.png'
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
                        <a target='_blank' href='https://github.com/BodiaPutiak/Amazon-clone'> Here you can check out the source code</a> 

                        Most buttons on the navigation bar are not active. 
                        I just wanted to replicate the original nav bar as close as 
                        it was possible for me at that time. The only thing that 
                        you can click on is the cart, as well as, all the functionality inside the cart. 
                        Also, a user can choose the category of the product he wants to buy and then choose between 
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
                    <div className="link-container">
                        <a target='_blank' href="https://github.com/BodiaPutiak/Spotify-music-controller">GitHub repository</a>
                    </div>
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

                        Stay tuned for updates as I enhance its functionality and design. Your feedback and support are immensely valuable as I embark on this exciting development journey.

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

    const renderBookMark = () => {
        return(
            <div className='project-container'>
                <div className='img-container'>
                    <img className='ecomm' src={BookMark} />
                </div>
                <div className="text-container">
                    <h1>
                        Langing Page for Chrome Extension 'BookMark'
                    </h1>
                    <div className="link-container">
                        <a  target='_blank' href='https://bookmarkwebsite.pages.dev/'>LIVE DEMO</a>
                        <a  target='_blank' href="https://github.com/BodiaPutiak/BookmarkWebSite">GitHub repository</a>
                    </div>
                    <p>
                        Simple langing page for chrome extension called 'BookMark'. There is nothing exciting about this project but I like the design and the layout of the page. So I decided to add it to my small portfolio.
                        Stay tuned for more details about this exciting addition to my portfolio, and thank you for visiting!
                    </p>
                </div>
            </div>
        )
    }

    const renderCarRental = () => {
        return(
            <div className='project-container'>
                <div className='img-container'>
                    <img className='ecomm' src={CarRental} />
                </div>
                <div className="text-container">
                    <h1>
                        Langing Page for Chrome Extension 'BookMark'
                    </h1>
                    <div className="link-container">
                        <a  target='_blank' href='https://car-rentall.pages.dev/'>LIVE DEMO</a>
                        <a  target='_blank' href="https://github.com/BodiaPutiak/CarRental">GitHub repository</a>
                    </div>
                    <p>
                        Welcome to CarRental, your go-to destination for exploring a wide range of available cars for rental. Our multi-page application is designed to provide users with a seamless experience as they browse through our diverse assortment of vehicles.

                        With CarRental, you can easily explore various car models, allowing you to make informed decisions about which car best suits your needs. Whether you're looking for a compact sedan, a spacious SUV, or a sleek luxury vehicle, our platform has something for everyone.

                        Using React, SCSS, and HTML, we've crafted an intuitive interface that prioritizes user experience. Our commitment to best React practices ensures that the source code is not only robust but also highly maintainable. By dividing the project into reusable components, we've eliminated the need for copying and pasting, resulting in cleaner and more efficient code.
                    </p>
                </div>
            </div>
        )
    }
    
    
    if (projectName === 'AmazonClone') {
        return (renderAmazonClone());
    } else if (projectName === 'SpotifyMusicController') {
        return (renderSpotifyPlayer());
    } else if (projectName === 'GymBro') {
        return (renderGymBro());
    } else if (projectName === 'EcommerceStore') {
        return (renderEcommerce())
    } else if (projectName === 'BookMark') {
        return (renderBookMark())
    } else if (projectName === 'CarRental'){
        return (renderCarRental())
    }
};

export default Project;
