import React, { useState } from 'react';
import NumberItemEditor from '../components/NumberItemEditor';
import NumberItemsList from '../components/NumberItemsList';
import Button from '../components/UI/Button';
import './NewGameEditor.css';

const NewGameEditor = props => {
    const [numberItems, setNumberItems] = useState([]);

    const addNumberItem = newNumberItem => {
        const newNumberItems = numberItems.concat([newNumberItem]);
        setNumberItems(newNumberItems);
    };

    const removeNumberItem = index => {
        const newNumberItems = numberItems.filter((v, i) => i !== index);
        setNumberItems(newNumberItems);
    };

    const startButtonJSX = numberItems && numberItems.length? <Button classes='success' clicked={() => props.createNewGameClicked(numberItems)}>Start</Button> : null;
    return (
        <div className='new-game-editor'>
            <div className='row-orientation'>
                <div className='column-orientation'>
                    <h5>Editor</h5>
                    <NumberItemEditor addClicked={addNumberItem}></NumberItemEditor>
                </div>
                <div className='column-orientation'>
                    <h5>Preview</h5>
                    <NumberItemsList items={numberItems} itemClicked={removeNumberItem}></NumberItemsList>
                </div>
            </div>
            <div className='row-orientation'>
                <div className='column-orientation'>{startButtonJSX}</div>
            </div>
        </div>
    );
}

export default NewGameEditor;