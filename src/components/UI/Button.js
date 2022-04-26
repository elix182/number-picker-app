import React from 'react';
import './Button.css';

const button = props => {
    const classes = props.classes || '';
    const className = `btn ${classes}`;
    const type = props.type || 'button';
    const title = props.title || '';
    return <button className={className} title={title} type={type} onClick={props.clicked}>{props.children}</button>
}

export default button