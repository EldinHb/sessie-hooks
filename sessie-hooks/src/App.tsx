import React from 'react';
import {NormalButton} from './components/buttons/NormalButton';
import './App.css';
import { useCurrency } from './hooks/UseCurrency';
import { useEditMode } from './hooks/UseEditMode';
import { QuoteOfTheDay } from './components/QuoteOfTheDay';

const App = () => {
  const [price, currencyType, toggleCurrency] = useCurrency(327);
  const editMode = useEditMode();

  return (
    <div className="container">
        <p className='unselectable'>{price} {currencyType}</p>
        <NormalButton
          title='Change currency'
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
