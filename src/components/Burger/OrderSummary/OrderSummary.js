import React from 'react';

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
        </div>
    )
}

export default OrderSummary;