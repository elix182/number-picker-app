import React from 'react';
import './NumberItem.css'
const numberItem = props => {
    const cursorStyle = props.clicked && props.visible? 'pointer' : 'auto';
    const opacityStyle = props.clicked? (props.visible? 1.0 : 0.0) : 1.0;
    const style = {
        backgroundColor: props.backgroundColor,
        color: props.fontColor,
        opacity: opacityStyle,
        cursor: cursorStyle
    };
    const labelStyle = {
        cursor: cursorStyle
    };
    const onClick = () => {
        if(!props.clicked || !props.visible){
            return;
        }
        props.clicked();
    }
    return <div className="number-item" style={style} onClick={onClick}><label style={labelStyle}>{props.numberValue}</label></div>;
}
export default numberItem;