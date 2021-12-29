import './WhoIAm.css';
import { Link } from 'react-router-dom';

export default function WhoIAm() {
    return (
        <div className='about'>
            <div className='info'>
                <h2>Hi! I'm Julia.</h2>
                <img className='about' src='../JuliaDwyerHeadshot.jpeg' alt='Julia' />
                <h3 className='i-value'>I value <span className='animation'></span></h3>
                <p>I'm a thoughtful creative who is passionate about problem solving. </p>
                <p>As a developer, I get <span className='bold'>hyped</span> about designing experiences that make life better for other humans. I believe excellence is hidden in the details, and that <span className='underline'>a user's experience should feel effortless</span> and fun. </p>
                <p>I’m eager to learn and always looking for a new challenge. With a combined background in engineering and the arts, I’m passionate about combining the two to create intuitive, enjoyable and optimized experiences and products. I value working positively on a team, pushing the boundaries of what is possible and using technology for good. </p>
                <p>I am so excited to see what the future holds.</p>
                <div className='inline'>
                    <Link to='/contact'><h3 className="i-value sub-link">Say Hello</h3></Link>
                    <p className='pipe'>|</p>
                    <Link to='/projects'><h3 className='i-value sub-link'>Check out my work</h3></Link>
                    <p className='pipe'>|</p>
                    <a href='https://www.linkedin.com/in/julia-dwyer-software-engineer/' target='_blank'><h3 className='i-value sub-link'>LinkedIn</h3></a>
                </div>

                {/* <p>From the jungles of Panama to European budget hostels, working with children and launching a photography business, my professional story may seem anything but linear to the outside observer, but to me it all connects. </p>
                <p>It takes guts to change your mind. It takes guts to admit you're not satisfied, and it sure as hell takes guts to dive headfirst into the unknown. Aside from the invaluable transferable skills I've collected along the way, my journey proves that I've got guts. I not only welcome challenges and opportunities to grow, I need them. I love when things don't go as planned because it tests my resourcefulness, composure under pressure, and creativity among many other things.</p>
                <p>Working in events and hospitality since the age of 16, I've learned...</p>
                <li>how to smile under pressure</li>
                <li>ask for help when you need it</li>
                <li>respect all humans</li>
                <li>multi-task, prioritize and adjust priorities on the spot.</li>
                <p>Traveling the World alone on a Budget, I've learned:</p>
                <li>resourcefulness</li>
                <li>asking for help when you need it</li>
                <li>communication skills</li>
                <li>people are mostly good and there is always someone who is willing to help</li>
                <li>all problems are solveable</li>
                <li>The perfect balance in life and work is not being afraid to go it alone, but finding the balance and connecting and asking for help at the same time, as well as offering help to others.</li>
                <p>Starting a photography business from scratch, I've learned:</p>
                <li>community and networking are your best bet to success</li>
                <li>time management</li>
                <li>communication and managing expectations</li>
                <li>perfection doesn't exist and honoring that can open up progress</li>
                <li>I prefer having a team to report to, than working alone.</li>
                <p>Learning what you don't want, is often the most effective pointer what you love. Takes life, gives life.</p>
                <p>Why I LOVE Software Engineering:</p>
                <li></li>
                <p>What makes me a great Software Engineer and teammate:</p>
                <li></li>
                <p>I'm not looking to work for a company, I'm looking to work with a team.</p>
                <p>Now I know that its the opposite.</p>
                <p>Dropping out of college after my mom died, I learned:</p>
                <p>Backpacking solo through Europe for 3 months I learned</p>
                <p>Living out of a backpack in the Jungles of Panama I learned</p>
                <p>Biking from Panama to Guatemala I learned:</p>
                <p>Trying to settle and do the write thing in Cambridge I learned:</p>
                <p>Moving to Spain, teaching English, and living there for 3 years I learned:</p>
                <p>All along this way, as time past I missed more and more the part of me who loves math, science and problem solving. Who craves logic challenges and instant feedback. And honestly, the part of me that values recognition and objective growth.</p>
                <p> I spent the greater part of my 20s searching wildly for purpose, connection, creation and fulfillment. I saved up working three jobs so I could take off and backpack Europe alone for three months. I returned home, and did it again, but this time took off to the jungles of Panama to live off the grid and learn about sustainability, community, creation and survival. At the tail end of my time in the jungle, I partnered with a handful of peers from my community and launched a sustainability campaign, vowing to bike from Panama to Los Angeles and blog about our experience and sustainability along the way in an effort to create conversation and challenge our ideas of what its possible. I moved to Spain to teach English for three years, ordering a turkey at the local market poulty stall a week before thanksgiving and carrying it up the hill in my host brothers backpack (sorry Jan!). Learned the language by falling in love with a Spaniard from La Mancha, and finally returned home just before COVID-19 hit hard. The quarantine that was a blessing and a curse for so many people. I've recently noticed how potent the parallel between finding your dream career, and finding your dream partner actually is. Except that in the world of dating, we have to crucial luxury of being able to distance ourselves, take a pause on relationships for a bit, and get to know ourselves, our interests, our values. Unfortunatley, for the majority of us humans, we don't have that same luxury with our careers. We're thrust into the working world at a ripe? 16 years old often choosing jobs out of necessity rather than curiousity, and are left with little time to pause, reflect, and explore. During COVID I was granted that time. It's funny how often I've quipped 'Of course artists of the Renaissance made incredible works, they had all the time in the world to just paint paint paint.' Here i found myself in lockdown, with all the time in the world, and I wasn't painting. but maybe painting wasn't my 'thing' I took EdX courses, about wine making, languages, physics, chemistry and Python: Programming for Everyone. As many coders can relate, remember their first lines of code. I was hooked. I couldn't stop. I finsihed the course and was itching for more practice. Lucky as we are, the internet today is FULL of infinite opportunites to practice and learn code. I refused to settle for any piece of my life puzzle that didn't light me up, career, relationships, cities, heck even towels. I believe that the less time humans spend unsatisfied or dissapointed, whether it be a career or an itchy towel, the more time we can all spend doing what we truly love, connecting, creating, exploring, learning, imagining and dreaming. </p>
                <p>I'll admit, I had a lot of self doubt, worried but supportive skepticism from loved ones, and so. many. fails. But now I can confidently say, I've found what lights me up and makes me feel alive. The thing I can't stop thinking about, connecting coding patterns to everyday life, dreaming up apps in the shower and features on my walks.</p>
                <p>I believe in minimalism. Quality over quanity. Smart, intuitive user focused experience; effortless user experience; customizable elements to make the user felt seen, understanding themselves better, grow, explore and play in a way that is 100% unique to them.</p>
                <p>I believe we can use technology for so much good.</p> */}
            </div>

        </div>
    )
}
