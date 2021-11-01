import Button from '@restart/ui/esm/Button';
import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <div className="contact-us">
            <h2 className="fw-bold">Contact With Us</h2>
            <p className="text-dark">Do You want any information and give feedback to us Please fill the text box and click to the send massage.</p>
            <div className="contact">
                <input className="w-50" type="text" placeholder="Your Name" />
                <input className="w-50" type="text" placeholder="Your Email" />
                <input className="w-50" type="text" placeholder="Your Subject" />
                <textarea className="w-50" name="" id="" cols="20" rows="5">Message</textarea>
                <Button className="w-50 btn-style" variant="primary">Submit</Button>
            </div>
        </div>
    );
};

export default Contact;