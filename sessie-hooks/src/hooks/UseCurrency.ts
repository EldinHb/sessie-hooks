import React from 'react';

export const useCurrency = (amount: number) => {
    const [calculatedAmount, setCalculatedAmount] = React.useState(amount);
    const [type, setType] = React.useState<CurrencyType>('euro');

    const toggleCurrency = () => {
        let newAmount: number = 0;
        switch(type) {
            case 'dollar':
                newAmount = calculatedAmount * 0.83;
                setCalculatedAmount(Math.floor(newAmount));
                setType('euro');
                return;
            case 'euro':
                newAmount = calculatedAmount * 1.21;
                setCalculatedAmount(Math.floor(newAmount));
                setType('dollar');
                return;
        }
    }

    return [calculatedAmount, type, toggleCurrency] as const;
}

export type CurrencyType = 'euro' | 'dollar';