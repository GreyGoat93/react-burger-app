import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import Logo from '../../Logo/Logo';
import Backdrop from '../../UI/Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationItems';
import style from './SideDrawer.module.css'

const SideDrawer = (props) => {
    return (
        <Auxiliary>
            <Backdrop show={props.toggleState} disappear={props.closeDrawer}/>
            <div 
            className={[style.SideDrawer, props.toggleState ? style.Open : style.Close].join(' ')}>
                <Logo />
                <ul>
                    <NavigationItems />
                </ul>
            </div>
        </Auxiliary>
    )
}

export default SideDrawer; 