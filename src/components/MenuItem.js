import React from 'react';
import './MenuItem.css'

const menuItem = props => {
    return (
        <div className="menu-item" onClick={props.clicked}>
            <label>{props.label}</label>
            <i aria-disabled={true} className={props.icon}></i>
        </div>
    );
}

export default menuItem;