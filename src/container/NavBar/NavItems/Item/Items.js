import React from 'react'

import './Items.css'

const Items = (props) => (
    <li className="Items">
        {props.children}
    </li>
);

export default Items
