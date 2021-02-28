import React from 'react'
import style from './Layout.module.css'

import Auxiliary from '../../hoc/Auxiliary'

const Layout = (props) => {
    return (
        <Auxiliary>
            <div>Nav</div>
            <main className={style.Layout}>
                {props.children}
            </main>
        </Auxiliary>
    )
}

export default Layout;