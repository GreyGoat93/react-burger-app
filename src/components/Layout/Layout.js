import React from 'react'
import style from './Layout.module.css'

import Auxiliary from '../../hoc/Auxiliary'
import Toolbar from '../Navigation/Toolbar/Toolbar'

const Layout = (props) => {
    return (
        <Auxiliary>
            <Toolbar/>
            <main className={style.Layout}>
                {props.children}
            </main>
        </Auxiliary>
    )
}

export default Layout;