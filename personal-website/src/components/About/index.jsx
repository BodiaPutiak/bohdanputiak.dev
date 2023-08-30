import './index.scss';
import { useState } from 'react';
// import Loader from 'react-loaders';
import MyPhoto from '../../assets/images/my-photo.jpg'
import stroke from '../../assets/images/stroke.png'
import htmlLogo from '../../assets/images/logo1.svg'
import cssLogo from '../../assets/images/logo2.png'
import javaLogo from '../../assets/images/logo3.svg'
import pythonLogo from '../../assets/images/logo6.svg'
import reactLogo from '../../assets/images/logo5.png'
import flaskLogo from '../../assets/images/logo4.svg'
import djangoLogo from '../../assets/images/django.svg'


const About = () => {
    let [state, setState] = useState({
        showLongVersion: false
    });
    
    const renderSeeMoreButton = () => {
        return(
            <button onClick={() => updateShowLongVersion(true)}>See more</button>
        )
    }
    
    const updateShowLongVersion = (value) => {
        setState({
            ...state,
            showLongVersion: value
        })
    }
    const renderLongVersion = () => {
        return (
            <div className='see-more-container'>
                <p>
                    I began my coding journey at Lviv Polytechnic University. I was studying Applicable Linguistics and we had some coding classes, however, they weren't as good as I thought they would be. In those classes, we were coding mostly in Pascal programming language which isn't the best option in today's world. 
                </p>
                <p>
                    So I've decided to move in this direction on my own. I've started watching YouTube tutorials on how to learn to code and quickly picked up Python because a lot of people online recommended it as the first programming language as it is easy to learn and is known for its English-like syntax. So I went online and found 'A Python course for beginners on 'Stepik'
                    (course platform similar to Udemy). So at free from university time, I was taking this course. 
                </p>
                <p>
                    And then I had to leave Ukraine. I moved to the small town of Białogard in Poland in the summer of 2022 and had to find a job. I was working 10 hours, five days a week, and studying on weekends. After I finished this Python course I found the Harvard CS50 course that covered the basics of computer science and was using C language as well as Python and JavaScript but half of the course was in C unfortunately&#40;.
                </p>
                <p>
                    Then I decided to move to Warsaw and find a job that allowed me to focus more on programming. I finished the CS50 course at the end of spring 2023 and started making my own projects using frameworks like Flask, ReactJS, and Django which you can see on this website. 
                </p>
                <button onClick={() => {updateShowLongVersion(false)}}>See less</button>
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
                        Full-Stack Software developer currently based in Warsaw, Poland.
                    </p>
                    <p>
                        I have a passion for learning new things, solving problems, 
                        and bringing value to others trough code using 
                        Python, JavaScript, ReactJS and CSS.
                    </p>
                    {state.showLongVersion ? renderLongVersion() : renderSeeMoreButton()}
                </div>
            </div>
            <div className='skills-container'>
                <h1>Technologies I've workedd with:</h1>
                {renderTags()}
                <div className='list-div'>
                    <div className='skill-container'>
                        <p>HTML</p>
                        <div className="skill-img">
                            <img src={htmlLogo} alt="" />
                        </div>
                    </div>
                    <div className='skill-container'>
                        <p>CSS</p>
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
                        <p>Python</p>
                        <div className="skill-img">
                            <img src={pythonLogo} alt="" />
                        </div>
                    </div>
                    <div className='skill-container'>
                        <p>Django and 
                            DjangoREST framework</p>
                        <div className="skill-img">
                            <img src={djangoLogo} alt="" />
                        </div>
                    </div>
                    <div className='skill-container'>
                        <p>Flask</p>
                        <div className="skill-img">
                            <img src={flaskLogo} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <Loader type='pacman' /> */}
        </>
    )
}

export default About;