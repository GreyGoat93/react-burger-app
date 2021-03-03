import React from 'react';
import style from './Logo.module.css'

import logo from '../../assets/burger-logo.png'

const Logo = (props) => {
    return (
        <div className={style.Logo}>
            <img src={logo} alt="Burger Logo" className={style.LogoImage}/>
        </div>
    )
}

export default Logo;