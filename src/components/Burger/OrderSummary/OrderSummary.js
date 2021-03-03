import React from 'react';

import Button from '../../UI/Button/Button'

const OrderSummary = (props) => {
    let list = Object.keys(props.ingredients).map(igKey => {
        return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
        )
    })
    
    return (
        <div>
            <h3>Your Order:</h3>
            <ul>
                {list}
            </ul>
            <p>Total: {props.orderSum}₺</p>
            <div>
                <Button btnStyle='Danger' 
                clicked={props.cancelClicked}>CANCEL</Button>
                <Button btnStyle='Success'
                clicked={props.continueClicked}>CONTINUE</Button>
            </div>
        </div>
    )
}

export default OrderSummary;