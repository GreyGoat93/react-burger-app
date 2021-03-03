import React, { useState } from 'react';

import Auxiliary from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
    salad: 3.50,
    cheese: 4.25,
    bacon: 6.00,
    meat: 8.50,
}

const BurgerBuilder = () => {
    const [ingredients, setIngredients] = useState({
        salad: 1,
        cheese: 1,
        bacon: 1,
        meat: 1,
    });
    const [totalPrice, setTotalPrice] = useState(22.25);
    const [showOrderModal, setShowOrderModal] = useState(false);

    const calculateTotalPrice = (ings) => {
        let total = Object.keys(ings).map(ing => {
            return ings[ing] * INGREDIENT_PRICES[ing];
        }).reduce((first, second) => first + second);
        setTotalPrice(total);
    }

    const addIngredient = (ing) => {
        let clonedIng = {...ingredients};
        clonedIng[ing] = ++clonedIng[ing];
        setIngredients(clonedIng);
        calculateTotalPrice(clonedIng);
    }

    const removeIngredient = (ing) => {
        let clonedIng = {...ingredients};
        clonedIng[ing] = --clonedIng[ing];
        if(clonedIng[ing] < 0){
            clonedIng[ing] = 0;
        } else {
            setIngredients(clonedIng);
            calculateTotalPrice(clonedIng);
        } 
    }

    const toggleOrderModal = (val) => {
        setShowOrderModal(val);
    }
    
    const continueOrder = () => {
        setShowOrderModal(false);
        alert('Congrats! You have ordered.')
    }

    return (
        <Auxiliary>
            <Modal show={showOrderModal} disappear={toggleOrderModal}>
                <OrderSummary 
                ingredients={ingredients}
                cancelClicked={[toggleOrderModal, [false]]}
                continueClicked={continueOrder}
                orderSum={totalPrice}/>
            </Modal>
            <Burger ingredients={ingredients}></Burger>
            <BurgerControls 
            totalPrice={totalPrice} 
            addIngredient={addIngredient} 
            removeIngredient={removeIngredient} 
            ingredients={ingredients}
            toggleOrderModal={toggleOrderModal}/>
        </Auxiliary>
    )
}

export default BurgerBuilder