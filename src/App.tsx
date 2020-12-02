import React from 'react';
import {ChangeCurrencyButton} from './components/buttons/ChangeCurrencyButton';
import './App.css';
import { useCurrency } from './hooks/UseCurrency';
import { useEditMode } from './hooks/UseEditMode';
import { useFetch } from './hooks/UseFetch';
import { QuoteResponse } from './library/Quotes';
import { QuoteOfTheDay } from './components/QuoteOfTheDay';

const App = () => {
  const [price, currencyType, toggleCurrency] = useCurrency(327);
  const editMode = useEditMode();

  return (
    <div className="container">
        <p className='unselectable'>{price} {currencyType}</p>
        <ChangeCurrencyButton
          onClick={toggleCurrency}
        />
        {
          editMode ? 
          <div>
            <p>Edit mode</p>
          </div> :
          null
        }
        <QuoteOfTheDay/>
    </div>
  );
}

export default App;
