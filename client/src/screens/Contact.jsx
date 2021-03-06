import { useState } from 'react';
import axios from 'axios';
import './Contact.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
    const [copy, toggleCopy] = useState('before')
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const { name, email, message } = formData;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        axios({
            method: "POST",
            url:"https://julia-dwyer-portfolio.herokuapp.com/send",
            data: formData,
        }).then((response) => {
            if (response.data.status === 'success') {
                alert("Thank you! Your message was sent successfully.");
                resetForm();
            } else if (response.data.status === 'fail') {
                alert("Message failed to send.")
            }
        })
    };

    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            message: ''
        })
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }


    return (
        <div className="contact">
            {/* <form id='contact-form' onSubmit={(e) => handleSubmit(e)} method="POST">
                <h2 className='form-title'>Send me an email directly...</h2>

                    <label htmlFor="name">Name</label>
                    <input name="name" type='text' className='form-control' value={name} onChange={(e)=> handleChange(e)}/>

                    <label htmlFor="exampleInputEmail1">Email Address</label>
                    <input name="email" type='email' className='form-control'  value={email} onChange={(e) => handleChange(e)}/>

                    <label htmlFor="message">Message</label>
                    <textarea name="message" className='form-control' rows="5" value={message} onChange={(e) => handleChange(e)}></textarea>

                <button type='submit' className="btn btn-primary">Submit</button>
            </form> */}
            <div className='manual-contact'>
                <h2 className='form-title'>Find me here...</h2>
                <h2 className='form-title'><FontAwesomeIcon icon={faLinkedin} /> <a href='https://www.linkedin.com/in/julia-dwyer-software-engineer/' target='_blank'>LinkedIn</a></h2>
                <h2 className='form-title'><FontAwesomeIcon icon={faPaperclip} /><a href='https://drive.google.com/file/d/1MXOk1I6_yCvtbJhuDvwVdWs4D-mplmr2/view?usp=sharing' target='_blank'> Resume</a></h2>
                <h2 className='form-title'><FontAwesomeIcon icon={faEnvelope} /> juliadwyer93@gmail.com <FontAwesomeIcon icon={faCopy} className={copy}
                    onClick={(e)=> {
                        navigator.clipboard.writeText('juliadwyer93@gmail.com');
                        toggleCopy('copied')
                    }
                    }/></h2>
            </div>
        </div>
    )
}
