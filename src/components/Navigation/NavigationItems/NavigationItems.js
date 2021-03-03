import React from 'react';
import style from './NavigationItems.module.css'

import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = (props) => {
    return (
        <ul className={style.NavigationItems}>
            <NavigationItem destination="#" active>Home</NavigationItem>
            <NavigationItem destination="#">Not Home</NavigationItem>
        </ul>
    )
}

export default NavigationItems;