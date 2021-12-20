import './Layout.css';
import { Link } from 'react-router-dom';

export default function Layout({children}) {
    return (
        <div>
            <nav>
                <Link to='/projects'>
                    <h3>Projects</h3>
                </Link>
                <Link to='/about-me'>
                    <h3>Who I Am</h3>
                </Link>
                <Link to='/contact'>
                    <h3>Contact Me</h3>
                </Link>
                <Link to='/testimonials' >
                    <h3>Testimonials</h3>
                </Link>
            </nav>
            {children}
        </div>
    )
}
