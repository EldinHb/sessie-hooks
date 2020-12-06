import React, { useContext } from 'react';
import { ThemeContext } from '../../state/ThemeProvider';
import { buttonProps, NormalButton } from './NormalButton';

export const ThemedButton = (props: buttonProps) => {
    const {theme} = useContext(ThemeContext);

    return(
        <NormalButton
            {...props}
            className={theme}
        />
    );
}