import React from 'react';
import style from './Modal.module.css'

import Backdrop from '../Backdrop/Backdrop'
import Auxiliary from '../../../hoc/Auxiliary'

const Modal = (props) => {
    const modalStyleInline = {
        transform: props.show ? 'translateY(0)' : 'translateY(-110vh)',
        opacity: props.show ? '1' : '0',
    }

    return (
        <Auxiliary>
            <div 
            className={style.Modal}
            style={modalStyleInline}
            >
                {props.children}
            </div>
            <Backdrop show={props.show} disappear={props.disappear}/>
        </Auxiliary>
    )
}

export default Modal;