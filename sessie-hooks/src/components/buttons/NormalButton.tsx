import React from 'react';
import './NormalButton.css';

export const NormalButton = (props: buttonProps) => {
    const _onClick = () => {
        if (props.onClick) props.onClick();
    }

    return(
        <div
            onClick={_onClick}>
            <div className='button'>
                <p className='unselectable'>{props.title}</p>
            </div>
        </div>
    );
}

export type buttonProps = {
    onClick?: () => void;
    title: string;
}