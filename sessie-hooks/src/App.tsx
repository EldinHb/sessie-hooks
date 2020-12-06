import React from 'react';
import { MainComponent } from './components/MainComponent';
import { GlobalAppStateContext } from './state/GlobalAppState';

const App = () => {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');

  return (
      <GlobalAppStateContext.Provider value={{
        theme,
        setTheme
      }}>
        <MainComponent/>
      </GlobalAppStateContext.Provider>
  );
}

export default App;
