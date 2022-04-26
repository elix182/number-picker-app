import React, { useState } from 'react';
import NumberItem from '../components/NumberItem';
import FloatingActionButton, { Positions } from '../components/UI/FloatingActionButton';
import './NumberPickerGame.css';

const NumberPickerGame = props => {
  const transformedItems = props.values.map(v => { 
    return {
      ...v,
      visible: true
    };
  });
  const [items, setItems] = useState(transformedItems);
  const itemClicked = itemIndex => {
    const newItems = [...items];
    newItems[itemIndex].visible = false;
    setItems(newItems);
    playCorrectAnswerSound();
    checkIfGameEnded();
  };

  const checkIfGameEnded = () => {
    const visibles = items.some(v => v.visible);
    if(!visibles){
      props.gameOverEvent();
    }
  }

  const playCorrectAnswerSound = () => {
    const soundFilePath = 'res/correct.mp3';
    playSound(soundFilePath);
  };

  const playWrongAnswerSound = () => {
    const soundFilePath = 'res/fail.mp3';
    playSound(soundFilePath);
  };

  const playSound = soundFilePath => {
    const audio = new Audio(soundFilePath);
    audio.play();
  }

  const exportGame = () => {
    const today = new Date();
    const fileName = `NumberPickerGame_${today.toISOString()}.json`;
    const contentType = 'application/json';
    const content = JSON.stringify(props.values);
    const a = document.createElement("a");
    const file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
    a.remove();
  };

  const numberItemsJSX = items.map((i, index) => <NumberItem 
    key={index} 
    numberValue={i.numberValue} 
    backgroundColor={i.backgroundColor}
    fontColor={i.fontColor}
    visible={i.visible}
    clicked={e => itemClicked(index)}></NumberItem>);
  return (
      <div>
        <FloatingActionButton classes='export-button' title='Export current game settings' position={Positions.BOTTOM_RIGHT} clicked={exportGame}>
          <i aria-disabled={true} className='fa fa-file-export'></i>
        </FloatingActionButton>
        <FloatingActionButton classes='danger' title='Use for wrong answers' position={Positions.BOTTOM_LEFT} clicked={playWrongAnswerSound}>
          <i aria-disabled={true} className='fa fa-xmark'></i>
        </FloatingActionButton>
        {numberItemsJSX}
      </div>
  );
}

export default NumberPickerGame;