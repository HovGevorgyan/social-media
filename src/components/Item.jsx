import React from 'react'
import '../styles/Item.css'

const Item = props => {
    return(
        <div className='Item' onClick={props.onClick}>{props.value}</div>
    )
};

export default Item;
