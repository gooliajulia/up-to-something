import { useState } from 'react';
import axios from 'axios';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

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
        <div>
            <p>Contact</p>
            <form id='contact-form' onSubmit={(e) => handleSubmit(e)} method="POST">
                <div className='form-group'>
                    <label htmlFor="name">Name</label>
                    <input name="name" type='text' className='form-control' onChange={(e)=> handleChange(e)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email Address</label>
                    <input name="email" type='email' className='form-control'  onChange={(e) => handleChange(e)}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" className='form-control' rows="5" onChange={(e) => handleChange(e)}></textarea>
                </div>
                <button type='submit' className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
