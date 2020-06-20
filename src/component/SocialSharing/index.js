import React from 'react'
import {Link} from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import SocialIconStyle from './SocialIcons.styled'

const SocialSharing = () => {
    return (
        <SocialIconStyle>
            <h3>Please share this</h3>
            <div className="socialIcon">
                <SocialIcon target="_blank" url="http://facebook.com/" />
                <SocialIcon target="_blank" url="http://linkedin.com/" />
                <SocialIcon target="_blank" url="http://instagram.com/" />
                <SocialIcon target="_blank" url="http://twitter.com/" />
                <SocialIcon target="_blank" url="http://whatsapp.com/" />
            </div>
        </SocialIconStyle>
    )
}

export default SocialSharing
