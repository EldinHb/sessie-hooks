import React from 'react';
import {NormalButton} from './buttons/NormalButton';
import '../App.css';
import { useCurrency } from '../hooks/UseCurrency';
import { QuoteOfTheDay } from './QuoteOfTheDay';
import { GlobalAppStateContext } from '../state/GlobalAppState';

export const MainComponent = () => {
  const [price, currencyType, toggleCurrency] = useCurrency(327);
  const appState = React.useContext(GlobalAppStateContext);

  return (
      <div className="container">
        <p className='unselectable'>{price} {currencyType}</p>
        <NormalButton
          title='Change currency'
          onClick={toggleCurrency}
        />
        <QuoteOfTheDay/>
      </div>
  );
}
