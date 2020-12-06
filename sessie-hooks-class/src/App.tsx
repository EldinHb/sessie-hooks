import React from 'react';
import './App.css';
import { CurrencyType } from './Library/CurrencyType';
import { NormalButton } from './Components/Buttons/NormalButton';
import { QuoteOfTheDay } from './Components/QouteOfTheDay';

interface IAppState {
  price: number;
  currencyType: CurrencyType;
}

interface IAppProps {

}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this._toggleCurrency = this._toggleCurrency.bind(this);

    this.state = {
      price: 327,
      currencyType: 'euro'
    };
  }

  private _toggleCurrency() {
    let newAmount: number = 0;
        switch(this.state.currencyType) {
            case 'dollar':
                newAmount = this.state.price * 0.83;
                this.setState({
                  price: Math.floor(newAmount),
                  currencyType: 'euro'
                });
                return;
            case 'euro':
                newAmount = this.state.price * 1.21;
                this.setState({
                  price: Math.floor(newAmount),
                  currencyType: 'dollar'
                });
                return;
        }
  }

  render() {
    return (
      <div className='container'>
        <p className='unselectable'>{this.state.price} {this.state.currencyType}</p>
        <NormalButton
          title='Change currency'
          onClick={this._toggleCurrency}
        />
        <QuoteOfTheDay/>
      </div>
    );
  }
}

export default App;
