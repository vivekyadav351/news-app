import React from 'react';

import RegistrationStyle from './Registration.styled';

const Registration = () => {
    return (
        <RegistrationStyle>
            <h3>Register</h3>
            <form>
                <input type="name" placeholder="First Name"/>
                <input type="name" placeholder="Last Name"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Enter Password"/>
                <input type="password" placeholder="Re-enter Password"/>
                <div className="buttons">
                    <button>Register</button>
                    <button>Login</button>
                </div>
            </form>
        </RegistrationStyle>
    )
}

export default Registration
