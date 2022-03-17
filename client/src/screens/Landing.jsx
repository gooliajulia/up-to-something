import React from 'react'
import './Landing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Landing() {
  return (
    <div className="landing">
      <div className="box-one">
        <img className="banner-image" src="./Spain.jpeg" />
        <div className="over-box">
          <h4>Say Hello </h4>
          <FontAwesomeIcon className="bouncing-icon" icon={faArrowRight} />
        </div>
      </div>
    </div>
  )
}
