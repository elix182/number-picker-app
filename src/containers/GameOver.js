import React, { useEffect } from 'react';
import Button from '../components/UI/Button';
import Conffeti from '../components/UI/Conffeti';
import './GameOver.css';

const GameOver = props => {
    useEffect(() => {
        const tada = new Audio('res/tada.mp3');
        tada.play();
    }, []);
    return (
        <div className='game-over'>
            <Conffeti show={true}></Conffeti>
            <div className='table'>
                <div className='row'>
                    <div className='col'>&shy;</div>
                </div>
                <div className='row'>
                    <div className='col big'>Game Over!</div>
                </div>
                <div className='row'>
                    <div className='col'>&shy;</div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <Button classes='primary back-button' clicked={props.goToMainMenuClicked}>
                            Go to Main Menu
                            <br></br>
                            <i aria-disabled={true} className='fa fa-house fa-2xl'></i>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GameOver;