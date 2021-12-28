import './Projects.css';
import { Link } from 'react-router-dom';

export default function Projects() {
    return (
        <div className='projects'>
            <div className='project'>
                <div className='images'>
                <img src='../FoodiesApp.png' alt='Foodies App Screenshot' />
                <img className='mobile' src='../ResponsiveC.png' alt='Mobile Design' />
                <img className='tablet' src='../ResponsiveB.png' alt='Tablet Design' />
                </div>

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
                    <h5><span className='bold'>Lessons Learned: </span>this project challenged me to design a dynamic layout with left side nav, and a right side feed. I created a main container to house the changing components as children of the layout and to hold much of the state. Then there was the added challenging of problem-solving a responsive design on smaller screens. This project helped me strengthen my understanding of how react works, and appreciate just how dynamic it can be.</h5>
                    <h5><span className='bold'>Future Development:</span>
                    <ul>
                        <li>Add ingredients and benefits resources on backend. Ingredients can have many benefits and vice versa, so that users can sort and search for recipes based on ingredients or benefits</li>
                        <li>Allow user's to create daily 'Meal Plans' consisting of recipes for the day. For example a meal plan for the day before a marathon, for hosting guests, or for a typical work day.</li>
                        <li>More Home Page features that allow user to explore and discover new recipes including a 'What should I eat?' quiz, 'Recomended for you' section, or different countries highlight</li>
                        <li>Allow user to track their own fridge and pantry items, create a grocery list, and search recipes based on what ingredients they have on hand</li>
                    </ul></h5>
                </div>
            </div>
        </div>
    )
}
