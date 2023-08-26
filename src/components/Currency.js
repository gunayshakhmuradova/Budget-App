import React from 'react';

const CurrencySelector = ({ currency, onCurrencyChange }) => {
    return (
        <div className='currency-selector'>
            <select value={currency} onChange={onCurrencyChange}>
                <option value="£">£ GBP</option>
                <option value="$">$ USD</option>
                <option value="€">€ EUR</option>
            </select>
        </div>
    );
};

export default CurrencySelector;
