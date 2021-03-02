import React from 'react';
import style from './BurgerControl.module.css';

const BurgerControl = (props) => {
    return (
        <div className={style.Container}>
            <div>{props.ingredient.display}</div>
            <div>
                <button onClick={() => props.addIngredient(props.ingredient.value)}>+</button>
                {props.ingredientCount}
                <button 
                onClick={() => props.removeIngredient(props.ingredient.value)}
                disabled={!props.ingredientCount}>-</button>              
            </div>
        </div>
    )
}

export default BurgerControl;