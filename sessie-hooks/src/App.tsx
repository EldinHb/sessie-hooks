import React, { useContext } from 'react';
import {NormalButton} from './components/buttons/NormalButton';
import './App.css';
import { useCurrency } from './hooks/UseCurrency';
import { QuoteOfTheDay } from './components/QuoteOfTheDay';
import { ThemeContext } from './state/ThemeProvider';

const App = () => {
  const [price, currencyType, toggleCurrency] = useCurrency(327);
  const {theme, setTheme} = useContext(ThemeContext);

  const _setTheme = () => {
    switch(theme) {
      case 'dark':
        setTheme('light');
        return;
      case 'light':
        setTheme('dark');
        return;
    }
  }

  return (
      <div className="container">
        <p className='unselectable'>{price} {currencyType}</p>
        <NormalButton
          title='Change currency'
          onClick={toggleCurrency}
        />
        <NormalButton
          title={theme}
          onClick={_setTheme}
        />
        <QuoteOfTheDay/>
      </div>
  );
}

export default App;