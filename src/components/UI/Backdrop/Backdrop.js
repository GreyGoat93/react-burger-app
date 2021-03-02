import React from 'react';
import style from './Backdrop.module.css'

const Backdrop = (props) => {
    return props.show ? <div className={style.Backdrop} onClick={() => props.disappear(false)}></div> : null
}

export default Backdrop;