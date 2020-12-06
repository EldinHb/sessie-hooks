import React, { useContext } from 'react';
import { ThemeContext } from '../../state/ThemeProvider';
import './NormalButton.css';

export const NormalButton = (props: buttonProps) => {
    const {theme} = useContext(ThemeContext);

    const _onClick = () => {
        if (props.onClick) props.onClick();
    }

    return(
        <div
            onClick={_onClick}>
            <div className={`button-${theme}`}>
                <p className='unselectable'>{props.title}</p>
            </div>
        </div>
    );
}

export type buttonProps = {
    onClick?: () => void;
    title: string;
}