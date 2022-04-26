import React from 'react';
import Button from '../components/UI/Button';
import './GameOver.css';

const GameOver = props => {
    return (
        <div className='game-over'>
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