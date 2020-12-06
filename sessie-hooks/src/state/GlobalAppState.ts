import React from 'react';
type GlobalAppStateType = {
    theme: 'dark' | 'light';
    setTheme: (type: 'dark' | 'light') => void;
}
export const GlobalAppState: GlobalAppStateType = {
    theme: 'light',
    setTheme: () => console.log('Didnt set function yet')
};
export const GlobalAppStateContext = React.createContext(GlobalAppState);