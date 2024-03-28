import './index.scss';
import { useState } from 'react';
import MyPhoto from '../../assets/images/my-photo.jpg'
import stroke from '../../assets/images/stroke.png'
import htmlLogo from '../../assets/images/logo1.svg'
import cssLogo from '../../assets/images/logo2.png'
import javaLogo from '../../assets/images/logo3.svg'
import pythonLogo from '../../assets/images/logo6.svg'
import reactLogo from '../../assets/images/logo5.png'
import djangoLogo from '../../assets/images/django.svg'
import Loader from 'react-loaders'



const About = () => {
    let [showLongVersion, setShowLongVersion] = useState(false);
    const downoloadCv = () => {
        const pdfUrl = "BohdanPutiakCV.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Bohdan_Putiak_CV.pdf"; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    const renderSeeMoreButton = () => {
        return(
            <div className='buttons-container'>
                <button onClick={() => setShowLongVersion(!showLongVersion)}>{!showLongVersion? 'See more' : 'See Less'}</button>
                <button onClick={downoloadCv}>Download CV</button>
            </div>
        )
    }

    const renderLongVersion = () => {
        return (
            <div className='see-more-container'>
                <p>
                    A graduate in Applied Linguistics seeking opportunities for development as a junior specialist in the 
                    field of programming. I have solid two years of programming experience (non-commercial ), with a particular emphasis on advanced skills in JavaScript and ReactJS.
 
                </p>
                <p>
                    I am fluent in English, Russian, and Ukrainian, enabling me to communicate effectively in 
                    international teams. I have experience working in groups, confirming my high communication skills 
                    and ability to collaborate effectively.
                </p>
                <p>
                    I am enthusiastic about professional development in the programming field and ready to contribute 
                    my skills to a new team. I am confident that my experience, determination, and skills align with the 
                    expectations for the position of a junior front-end specialist                
                </p>
                {renderSeeMoreButton()}
            </div>
        )
    }
    
    const renderTags = () => {
        return (
            <>
                <span className='tags bottom-tags'>
                    &lt;/body&gt;
                    <br />
                    <span className='bottom-tag-html'>&lt;/html&gt;</span>
                </span>

                <span className='tags css-tags'>
                    div &#123;
                        <br />
                        <span className='css-middle-tag'>display: flex;</span>
                        <br />
                        <span className='css-middle-tag'>flex-direction: column;</span>
                        <br />
                        <span className='css-middle-tag'>align-items: center;</span>
                        <br />
                        &#125;
                </span>

                <span className='tags react-tags'>
                    const [state, setState] = useState (&#123;
                    <br />
                    <span className='react-middle-tag'>nextButtonPressed: false,</span>
                    <br />
                    <span className='react-middle-tag'>prevButtonPressed: false,</span>
                    <br />
                    <span className='react-middle-tag'>showSettings: true,</span>
                    <br />
                    &#125;)
                </span>

                <span className='tags python-tags'>
                    if name not in names or len(name)&lt;5:
                    <br />
                    <span className='python-middle-tag'>names.pop(name)</span>
                </span>
            </>
        )
    }

    return(
        <>
        <div className='container'>
            <div className="about-page">
                <div className='img-container'>
                    <img className='stroke' src={stroke} />
                    <img className='my-photo' src={MyPhoto} alt="" />
                </div>            
                <div className='text-container'>
                    <h1>About me</h1>
                    <p>
                        Hi there! I am Bohdan Putiak, a beginner self-thought 
                        Front-End Software developer currently based in Warsaw, Poland.
                    </p>
                    <p>
                        I have a passion for learning new things, solving problems, 
                        and bringing value to others trough code using 
                        JavaScript, ReactJS, HTML and CSS.
                    </p>
                    {showLongVersion ? renderLongVersion() : renderSeeMoreButton()}
                </div>
            </div>
            <div className='skills-container'>
                <h1>Technologies I've worked with:</h1>
                {renderTags()}
                <div className='list-div'>
                    <div className='skill-container'>
                        <p>HTML</p>
                        <div className="skill-img">
                            <img src={htmlLogo} alt="" />
                        </div>
                    </div>
                    <div className='skill-container'>
                        <p>CSS (SCSS)</p>
                        <div className="skill-img">
                            <img src={cssLogo} alt="" />
                        </div>
                    </div>
                    <div className='skill-container'>
                        <p>JavaScript</p>
                        <div className="skill-img">
                            <img src={javaLogo} alt="" />
                        </div>
                    </div>
                    <div className='skill-container'>
                        <p>ReactJS</p>
                        <div className="skill-img">
                            <img src={reactLogo} alt="" />
                        </div>
                    </div>
                    <div className='skill-container'>
                        <p>Redux Toolkit</p>
                        <div className="skill-img">
                            <img src={reactLogo} alt="" />
                        </div>
                    </div>
                    <div className='skill-container'>
                        <p>Python</p>
                        <div className="skill-img">
                            <img src={pythonLogo} alt="" />
                        </div>
                    </div>
                    <div className='skill-container'>
                        <p>DjangoREST framework</p>
                        <div className="skill-img">
                            <img src={djangoLogo} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default About;