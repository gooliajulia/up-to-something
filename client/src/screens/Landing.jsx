
import './Landing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="landing">
      <div className="box-one">
        <img className="banner-image" src="./Spain.jpeg" />
        <div >
          <Link to='/contact' className="over-box">
          <h4 className="font-animate">Say Hello </h4>
          <FontAwesomeIcon className="bouncing-icon" icon={faArrowRight} />
          </Link>
        </div>
      </div>
      <div className="bottom-box">
      <p className="tri-phrase-bottom">
        <span className="hover-color">fullstack software engineer. </span><span className="hover-color">driven by challenge and positive impact.</span>
        </p>
      </div>
    </div>
  )
}
