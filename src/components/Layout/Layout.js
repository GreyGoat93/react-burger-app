import React from 'react'

import Auxiliary from '../../hoc/Auxiliary'
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder'

const Layout = (props) => {
    return (
        <Auxiliary>
            <div>Nav</div>
            <main>
                <BurgerBuilder></BurgerBuilder>
            </main>
        </Auxiliary>
    )
}

export default Layout;