import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BudgetList() {
  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    axios.get('API endpoint for fetching budgets')
      .then(response => {
        setBudgets(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>Budget List</h2>
      {budgets.map(budget => (
        <div key={budget.id}>
          <h3>{budget.title}</h3>
          <p>Amount: {budget.amount}</p>
        </div>
      ))}
    </div>
  );
}

export default BudgetList;