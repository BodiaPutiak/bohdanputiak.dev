import Tilt from 'react-parallax-tilt';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';



const Preview = (props) => {
    const videoRefs = [
        useRef(null), 
        useRef(null), 
        useRef(null),
        useRef(null), 
        useRef(null),
        useRef(null)
    ];

    const handleVideoHover = (index) => {
        const video = videoRefs[index].current;

        if (video) {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
                video.currentTime = 0;
            }
        }
    };

    const renderTechStack = (technologies) => {
        return (
            <>
                {technologies.map((technologie, index) => (
                    <div className='technologie' key={index}>{technologie}</div>
                ))}
            </>
        )
    }
   
    const navigate = useNavigate(); 

    const handleShowProjectClick = (projectName) => {
        navigate(`/portfolio/project/${projectName}`);
    }

    return (
        <Tilt>
            <div className="project-card">
                <div className="project-video-container">
                <video
                    src={props.data.video}
                    typeof='video/mp4'
                    loop
                    muted
                    ref={videoRefs[props.data.index]}
                    onMouseEnter={() => handleVideoHover(props.data.index)}
                    onMouseLeave={() => handleVideoHover(props.data.index)}
                />
                </div>
                <div className='text-container'>
                    <h1>{props.data.title}</h1>
                    <p>TechStack</p>
                </div>
                <div className="technologies">
                    {renderTechStack(props.data.stack)}
                </div>
                <button onClick={() => handleShowProjectClick(props.data.name)}>
                    See the project
                </button>
            </div>
        </Tilt>
    )
}

export default Preview;