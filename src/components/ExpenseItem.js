import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import CurrencySelector from './Currency'; 

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });
    };

    const handleCurrencyChange = (e) => {
        
        props.onCurrencyChange(e.target.value);
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.currency}{props.cost}</td>
            <td>
                <button onClick={event => increaseAllocation(props.name)}>+</button>
            </td>
            <td>
                <TiDelete size='1.5em' onClick={handleDeleteExpense} />
            </td>
            <td>
                <CurrencySelector currency={props.currency} onCurrencyChange={handleCurrencyChange} />
            </td>
        </tr>
    );
};

export default ExpenseItem;
