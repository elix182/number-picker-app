import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/js/all.js';
import './App.css';
import states from './StatesApp';
import Layout from './hoc/Layout';
import MainMenu from './containers/MainMenu';
import NumberPickerGame from './containers/NumberPickerGame';
import NewGameEditor from './containers/NewGameEditor';
import GameOver from './containers/GameOver';

function App() {
  const [currentState, setCurrentState] = useState(0);
  const [gameConfig, setGameConfig] = useState([]);
  const menutItemClicked = value => {
    if(value === states.IMPORT_GAME){
      importGame();
    } else if(value === states.RANDOM_GAME){
      randomizeGame();
    } else if(value === states.MENU){
      setGameConfig([]);
    } else {
      setCurrentState(value);
    }
  };

  const importGame = () => {
    let input = document.createElement('input');
    input.type = 'file';
    input.accept=".json";
    input.onchange = _ => {
      const files = Array.from(input.files);
      const fr = new FileReader();
      fr.onload = () => {
        const text = fr.result;
        const numberItems = JSON.parse(text);
        setGameConfig(numberItems);
        setCurrentState(states.GAME);
      };
      fr.readAsText(files[0]);
      input.remove();
    };
    input.click();
  };

  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const randomizeGame = () => {
    const minElements = 4;
    const maxElements = 12;
    const lowerValue = 1;
    const maxValue = 90;
    const colors = [
      '#FF0000',
      '#FF8000',
      '#FFFF00',
      '#04B404',
      '#0000FF',
      '#8000FF',
      '#FF0080',
      '#000000',
      '#FFFFFF'
    ];
    const fontColors = [
      '#FFFFFF',
      '#FFFFFF',
      '#000000',
      '#FFFFFF',
      '#FFFFFF',
      '#FFFFFF',
      '#FFFFFF',
      '#FFFFFF',
      '#000000'
    ];
    const limit = getRandomInt(minElements, maxElements + 1);
    const numberItems = [];
    while(numberItems.length < limit){
      const value = getRandomInt(lowerValue, maxValue + 1);
      if(!numberItems.some(x => x.numberValue === value)){
        const colorIndex = getRandomInt(0, colors.length);
        numberItems.push({
          numberValue: value,
          backgroundColor: colors[colorIndex],
          fontColor: fontColors[colorIndex]
        });
      }
    }
    setGameConfig(numberItems);
    setCurrentState(states.GAME);
  };

  const createNewGame = numberItems => {
    setGameConfig(numberItems);
    setCurrentState(states.GAME);
  };

  const gameEndEvent = () => {
    setCurrentState(states.GAME_OVER);
  }

  const goBackToMainMenu = () => {
    setGameConfig([]);
    setCurrentState(states.MENU);
  }

  const renderedComponents = () => {
    if(currentState === states.GAME){
      return <NumberPickerGame values={gameConfig} gameOverEvent={gameEndEvent}></NumberPickerGame>;
    } else if(currentState === states.NEW_GAME){
      return <NewGameEditor createNewGameClicked={createNewGame}></NewGameEditor>;
    } else if(currentState === states.GAME_OVER){
      return <GameOver goToMainMenuClicked={goBackToMainMenu}></GameOver>;
    } else {
      return <MainMenu itemClicked={menutItemClicked}></MainMenu>;
    }
  };
  return (
    <div className="App">
      <Layout>
        {renderedComponents()}
      </Layout>
    </div>
  );
}

export default App;
