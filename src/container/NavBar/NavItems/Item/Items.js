import React from 'react'

import ItemStyle from './Item.styled';

const Items = (props) => (
    <ItemStyle>
        {props.children}
    </ItemStyle>
);

export default Items
