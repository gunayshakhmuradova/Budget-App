import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { expenses, budget } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return total + item.cost;
    }, 0);
    const [updatedBudget, setUpdatedBudget] = useState(budget);
    const alertType = totalExpenses > updatedBudget ? 'alert-danger' : 'alert-success';

    const handleBudgetChange = (e) => {
        const newBudget = parseFloat(e.target.value);
        if (newBudget >= totalExpenses ) {
            alert ("Budget should not exceed remaining funds £"+totalExpenses);
        } else if (newBudget > 2000) {
            alert("Budget should not exceed 2000!");
        }
        else {
            setUpdatedBudget(newBudget);
        }
    };

    return (
        <div className={`alert ${alertType}`}>
            <span>Budget: £
                <input
                    type="number"
                    value={updatedBudget}
                    onChange={handleBudgetChange}
                />
            </span>
        </div>
    );
};

export default Budget;
