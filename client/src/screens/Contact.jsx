import { useState } from 'react';
import axios from 'axios';
import './Contact.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
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
            url:"http://localhost:3002/send",
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
            <form id='contact-form' onSubmit={(e) => handleSubmit(e)} method="POST">
                <h2 className='form-title'>Send me an email directly...</h2>
                {/* <div className='form-group'> */}
                    <label htmlFor="name">Name</label>
                    <input name="name" type='text' className='form-control' value={name} onChange={(e)=> handleChange(e)}/>
                {/* </div> */}
                {/* <div className="form-group"> */}
                    <label htmlFor="exampleInputEmail1">Email Address</label>
                    <input name="email" type='email' className='form-control'  value={email} onChange={(e) => handleChange(e)}/>
                {/* </div> */}
                {/* <div className='form-group'> */}
                    <label htmlFor="message">Message</label>
                    <textarea name="message" className='form-control' rows="5" value={message} onChange={(e) => handleChange(e)}></textarea>
                {/* </div> */}
                <button type='submit' className="btn btn-primary">Submit</button>
            </form>
            <div className='manual-contact'>
                <h2 className='form-title'>Or find me here...</h2>
                <h2 className='form-title'><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</h2>
                <h2 className='form-title'><FontAwesomeIcon icon={faPaperclip} /> Resume</h2>
                <h2 className='form-title'><FontAwesomeIcon icon={faEnvelope} /> juliadwyer93@gmail.com</h2>
            </div>
        </div>
    )
}
