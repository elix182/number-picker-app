import React from 'react';
import NumberItem from './NumberItem';
import './NumberItemsList.css';

const numberItemsList = props => {
    const numberItemsJSX = props.items.map((i, index) => <NumberItem 
    key={index} 
    numberValue={i.numberValue} 
    backgroundColor={i.backgroundColor}
    fontColor={i.fontColor} clicked={() => props.itemClicked(index, i)} visible={true}></NumberItem>);
  return (
      <div className='number-items-list'>
        {numberItemsJSX}
      </div>
  );
}
export default numberItemsList;