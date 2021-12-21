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
                    <h5 className='description'>The Foodies app is a Spotify mimic that replaces songs with recipes and playlists with meal plans. Modern day recipe hunting and meal planning is clunky and nonsocial. Foodies solves this problem by not only allowing users to connect and follow fellow foodies for recipe inspiration, but store all of their favorite recipes in one place. </h5>
                    <h5>Time to Complete: 5 days</h5>
                    <h5>Mission:</h5>
                    <h5>Tech used: React, Ruby on Rails</h5>
                    <h5>GitHub Link: </h5>
                    <h5>Lessons Learned:</h5>
                    <h5>Future Development:</h5>
                </div>
            </div>
        </div>
    )
}
