import Tilt from 'react-parallax-tilt';
import { useNavigate } from 'react-router-dom';



const Preview = (props) => {
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
                <div className="project-img-container">
                    <img className={props.data.imgClass} src={props.data.img} alt="" />
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