import React, { useContext } from 'react';
import './NormalButton.css';

export const NormalButton = (props: buttonProps) => {
    return(
        <div
            onClick={props.onClick}>
            <div className={'button ' + props.className}>
                <p className='unselectable'>{props.title}</p>
            </div>
        </div>
    );
}

export type buttonProps = {
    onClick?: () => void;
    title: string;
    className?: string;
}