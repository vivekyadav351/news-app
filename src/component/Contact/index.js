import React from 'react'

import ContactStyle from './Contact.styled'

const Contact = () => {
    return (
        <ContactStyle>
            <h1>Contact Us</h1>
            <p>We love to hear from you. Use the directory below to contact us.</p>
            <div className="section">
                <h2>Advertising</h2>
                <p>Advertise with Entrepreneur: advertise@cowrks.com</p>
            </div>
            <div className="section">
                <h2>Email</h2>
                <p>xyz@gmail.com</p>
            </div>
            <div className="section">
                <h2>Phone</h2>
                <p>+91 88XXXXXXXX90, 90XXXXXXXX65</p>
            </div>
            <div className="section">
                <h2>Address</h2>
                <p>6th Main, 21st Sector, 5th Avenue, HSR Layout, Bengaluru, Karnataka India.</p>
            </div>
        </ContactStyle>
    )
}

export default Contact
