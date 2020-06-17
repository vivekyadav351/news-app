import React from 'react'
import {Link} from 'react-router-dom';
import { TiSocialFacebook, TiSocialLinkedin, TiSocialGooglePlus } from "react-icons/ti";
import { GrInstagram } from "react-icons/gr";
import './SocialSharing.css'

const SocialSharing = () => {
    return (
        <div className="share">
            <h3>Please share this</h3>
            <div className="socialIcon">
                <Link to="/#"><TiSocialFacebook color='#3b5998' /></Link>
                <Link to="/#"><TiSocialLinkedin color='#0e76a8' /></Link>
                <Link to="/#"><TiSocialGooglePlus color='red' /></Link>
                <Link to="/#"><GrInstagram color='#3f729b' /></Link>
            </div>
        </div>
    )
}

export default SocialSharing
