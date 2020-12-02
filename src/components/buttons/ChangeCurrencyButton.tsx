import React from 'react';
import './ChangeCurrencyButton.css';

export const ChangeCurrencyButton = (props: buttonProps) => {
    const _onClick = () => {
        if (props.onClick) props.onClick();
    }

    return(
        <div
            onClick={_onClick}>
            <div className='button'>
                <p className='unselectable'>Toggle currency</p>
            </div>
        </div>
    );
}

export type buttonProps = {
    onClick?: () => void;
}