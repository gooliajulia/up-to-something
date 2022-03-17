import './Layout.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function Layout({children}) {
    return (
        <div>
            <div className="top-nav">
                <h1>JD</h1>
                <p className="tri-phrase">
                    <span className="hover-color">empathetic. </span>
                    <span className="hover-color"> creative. </span>
                    <span className="hover-color"> passionate. </span></p>
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
                </nav>
            </div>
            {children}
        </div>
    )
}
