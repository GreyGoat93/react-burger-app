import React from 'react';
import style from './Button.module.css';

const Button = (props) => {
    let isClickable = props.clicked != null;
    let funcOnClick = null;
    if (isClickable) {
        if (Array.isArray(props.clicked)){
            funcOnClick = () => {props.clicked[0](...props.clicked[1])}
        } else {
            funcOnClick = () => {props.clicked()}
        }
    }
    
    return (
        <button
        className={[style.Button, style[props.btnStyle]].join(' ')}
        onClick={funcOnClick}>{props.children}</button>
    )
}

export default Button;