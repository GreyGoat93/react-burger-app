import React, { useState } from 'react'
import style from './Layout.module.css'

import Auxiliary from '../../hoc/Auxiliary'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const Layout = (props) => {
    const [sideDrawerToggle, setSideDrawerToggle] = useState(false);
    const closeSideDrawer = () => {
        setSideDrawerToggle(false);
    }

    const openSideDrawer = () => {
        setSideDrawerToggle(true);
    }

    return (
        <Auxiliary>
            <Toolbar
            closeDrawer={closeSideDrawer}
            openDrawer={openSideDrawer}
            toggleState={sideDrawerToggle}/>
            <SideDrawer 
            toggleState={sideDrawerToggle} 
            closeDrawer={closeSideDrawer}/>
            <main className={style.Layout}>
                {props.children}
            </main>
        </Auxiliary>
    )
}

export default Layout;