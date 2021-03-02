import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary'
import BurgerControl from './BurgerControl/BurgerControl'

import style from './BurgerControls.module.css'

const ingredients = [
    {value: 'salad', display: 'Salad'}, 
    {value: 'cheese', display: 'Cheese'}, 
    {value: 'bacon', display: 'Bacon'}, 
    {value: 'meat', display: 'Meat'}
];

const BurgerControls = (props) => {
    
    const options = ingredients.map((ing, index) => {
        return (
            <BurgerControl
            key={ing + index}
            ingredient={ing} 
            addIngredient={props.addIngredient} 
            removeIngredient={props.removeIngredient}
            ingredientCount={props.ingredients[ing.value]}/>
        )
    })

    const totalIngredient = Object.keys(props.ingredients).map(ing => {
        return props.ingredients[ing];
    }).reduce((first, second) => first + second);

    return (
        <Auxiliary>
            <div className={style.Container}>
                <div>
                    <p>Current Price: <strong>{props.totalPrice.toFixed(2)}₺</strong></p>
                </div>
                <div>
                    {options}
                </div>
                <button 
                className={style.OrderButton} 
                onClick={() => props.toggleOrderModal(true)}
                disabled={!totalIngredient}>ORDER NOW!</button>
            </div>
        </Auxiliary>
    )
}

export default BurgerControls;