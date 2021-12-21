import './Projects.css';
import { Link } from 'react-router-dom';

export default function Projects() {
    return (
        <div className='projects'>
            <div className='project'>
                <img src='../FoodiesApp.png' alt='Foodies App Screenshot' />
                <div className='project-details'>
                    <h3>Project Name: Foodies.</h3>
                    <h4>Deployed site: {<a href='https://foodies-community.netlify.app/' target="_blank">Foodies App</a>}</h4>
                    <h5>...type description here...</h5>
                    <h5>time to complete</h5>
                    <h5>Mission</h5>
                    <h5>tech used</h5>
                    <h5>GitHub link</h5>
                    <h5>lessons learned</h5>
                    <h5>future development</h5>
                </div>
            </div>
        </div>
    )
}
