import React from 'react'
import style from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
    let arrayIng = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} ingredient={igKey}/>
        })
    })
    .reduce((first, second) => {
        return first.concat(second);
    })

    if(!arrayIng.length){
        arrayIng = <div>Add some ingredients!</div>
    }

    return (
        <div className={style.Burger}>
            <BurgerIngredient ingredient="bread-top" />
            {arrayIng}
            <BurgerIngredient ingredient="bread-bottom" />
        </div>
    );
}

export default Burger;