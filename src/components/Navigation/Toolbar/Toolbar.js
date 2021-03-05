import React from 'react';
import style from './Toolbar.module.css'

import Logo from '../../Logo/Logo'

import NavigationItems from '../NavigationItems/NavigationItems'

const Toolbar = (props) => {
    return (
        <header className={style.Toolbar}>
            <div 
            onClick={() => {props.toggleState ? props.closeDrawer() : props.openDrawer()}}
            className={style.DrawerToggle}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <Logo />
            <nav className={style.Nav}>
                <NavigationItems></NavigationItems>
            </nav>
        </header>
    )
}

export default Toolbar;