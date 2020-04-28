import React from 'react'
import './Items.css'

const Items = (props) => (
    <li className="Items"><a href="/">{props.children}</a></li>
);

export default Items
