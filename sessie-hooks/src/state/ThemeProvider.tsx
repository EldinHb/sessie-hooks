import React from 'react';
import {ThemeType} from '../themes/AppThemes';

type ThemeProviderType = {
    theme: ThemeType;
    setTheme: (type: ThemeType) => void;
}
const DefaultValue: ThemeProviderType = {
    theme: 'light',
    setTheme: () => console.log('function not set yet')
};

export const ThemeContext = React.createContext(DefaultValue);

export const ThemeProvider = (props: ThemeProviderProps) => {
    const [theme, setTheme] = React.useState<ThemeType>(DefaultValue.theme);

    return(
        <ThemeContext.Provider value={{
            theme, setTheme            
        }}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export type ThemeProviderProps = {
    children?: React.ReactNode;
}