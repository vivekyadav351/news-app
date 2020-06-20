import React from 'react'
import AboutStyle from './About.styled';
import B3 from '../../assets/images/b3.jpg';
import B4 from '../../assets/images/b4.jpg';
import B5 from '../../assets/images/b5.jpg';
import B6 from '../../assets/images/b6.jpg';

const About = () => {
    return (
        <AboutStyle>
            <h1>About Us</h1>
            <div className="section">
                <p>We provide platform for “Co-Working Space” Company to promote their brand and write blog related to their business. We also provide contact details of people looking for co-working space. We also give platform for small brand to compete with big brands.</p>
                <img src={B3} alt='B5' />
            </div>
            
            <h2>Our Moto</h2>
            <div className="section">
                <p>Imagine an environment without the stuffiness of a corporate office space but still more structure than your home office. Sounds perfect, right? That’s what we’ve created with a creative coworking space. Less formalities and distractions, more productivity. Being surrounded by other hardworking professionals like you can also give you that extra boost of motivation. You’ll also have also have access to professional amenities like fully equipped conference rooms that will help you make the right impression all while increasing your productivity.We aim our best to provide the information on professional-friendly workspaces available in the prime locations of highly demanding cities of India.</p>
                <img src={B6} alt='B5' />
            </div>

            <h2>Our Offerings</h2>
            <div className="section">
                <p>We provide platform for “Co-Working Space” Company to promote their brand and write blog related to their business. We also provide contact details of people looking for co-working space. We also give platform for small brand to compete with big brands. </p>
                <img src={B5} alt='B5' />
            </div>
            
        </AboutStyle>
    )
}

export default About
