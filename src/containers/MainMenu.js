import React from 'react';
import Wrapper from '../hoc/Wrapper';
import MenuItem from '../components/MenuItem';
import './MainMenu.css';

const MainMenu = props => {
    const options = [
        {
            icon: 'fa fa-play fa-2xl',
            label: 'Create new game',
            value: 1
        },
        {
            icon: 'fa fa-file-import fa-2xl',
            label: 'Import game',
            value: 2
        },
        {
            icon: 'fa fa-shuffle fa-2xl',
            label: 'Random!',
            value: 3
        }
    ];
    const optionsJSX = options.map(option => <Wrapper key={option.value}><MenuItem icon={option.icon} label={option.label} clicked={e => props.itemClicked(option.value)}></MenuItem><br></br></Wrapper>)
    return <div className='main-menu'>{optionsJSX}</div>;
}

export default MainMenu;