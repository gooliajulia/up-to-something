import './Projects.css';
import { Link } from 'react-router-dom';

export default function Projects() {
    return (
        <div className='projects'>
            <div className='project'>
                <img src='../FoodiesApp.png' alt='Foodies App Screenshot' />
                <div className='project-details'>
                    <h3>Project Name: Foodies.</h3>
                    <h4><span className='bold'>Deployed site:</span> <a href='https://foodies-community.netlify.app/' target="_blank">Foodies App</a></h4>
                    <h5 className='description'>The Foodies app is a Spotify mimic that replaces songs with recipes and playlists with meal plans. Modern day recipe hunting and meal planning is clunky and nonsocial. Foodies solves this problem by not only allowing users to connect and follow fellow foodies for recipe inspiration, but store all of their favorite recipes in one place. </h5>
                    <h5><span className='bold'>Time to Complete:</span> 5 days</h5>
                    <h5 className='mission'><span className='bold'>Mission: </span></h5>
                    <ul>
                        <li>Build a RESTful JSON API Back End using Ruby on Rails</li>
                        <li>Full CRUD generic controller actions on Back End </li>
                        <li>React App Front End with full CRUD functionality, consuming data from Ruby on Rails API</li>
                    </ul>
                    <br/>
                    <h5><span className='bold'>Tech used: </span>React, Ruby on Rails, React Router, Netflify and Heroku Deployment</h5>
                    <h5><span className='bold'>GitHub Link: <a href='https://github.com/gooliajulia/foodies/blob/main/README.md' target="_blank" >Foodies App GitHub Repo</a></span></h5>
                    <h5><span className='bold'>Lessons Learned:</span></h5>
                    <h5><span className='bold'>Future Development:</span></h5>
                </div>
            </div>
        </div>
    )
}
