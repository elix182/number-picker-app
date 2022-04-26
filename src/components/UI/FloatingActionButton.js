import React from 'react';
import './FloatingActionButton.css';

const TOP_LEFT = 'tp';
const TOP_RIGHT = 'tr';
const BOTTOM_LEFT = 'bl';
const BOTTOM_RIGHT = 'br';
const Positions = {
    TOP_LEFT,
    TOP_RIGHT,
    BOTTOM_LEFT,
    BOTTOM_RIGHT
};

const FloatingActionButton = props => {
    const position = props.position || BOTTOM_RIGHT;
    const classes = props.classes || '';
    const className = `floating-action-button ${position} ${classes}`;
    const type = props.type || 'button';
    const title = props.title || '';
    return <button className={className} title={title} type={type} onClick={props.clicked}><template>{props.children}</template></button>
}

export { Positions };
export default FloatingActionButton;