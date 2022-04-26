import React, { useState } from 'react';
import NumberItem from './NumberItem';
import Input from './UI/Input';
import Button from './UI/Button';
import './NumberItemEditor.css'

const NumberItemEditor = props => {
    const [backgroundColor, setBackgroundColor] = useState('#000000');
    const [fontColor, setFontColor] = useState('#FFFFFF');
    const [numberValue, setNumberValue] = useState(0);
    const onAddClick = () => {
        const numberItem = { backgroundColor, fontColor, numberValue };
        props.addClicked(numberItem);
    };
    return (
        <div className='number-item-editor'>
            <Input type='color' label='Background Color' value={backgroundColor} changed={e => setBackgroundColor(e.target.value)}></Input>
            <Input type='color' label='Font Color' value={fontColor} changed={e => setFontColor(e.target.value)}></Input>
            <Input type='number' label='Value' value={numberValue} changed={e => setNumberValue(e.target.value)} min={0}></Input>
            <NumberItem backgroundColor={backgroundColor} fontColor={fontColor} numberValue={numberValue}></NumberItem>
            <Button classes='primary' clicked={onAddClick}>Add</Button>
        </div>
    );
}

export default NumberItemEditor;