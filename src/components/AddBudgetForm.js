import React, { useState } from 'react';
import axios from 'axios';

function AddBudgetForm() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const newBudget = { title, amount };

    axios.post('API endpoint for adding a budget', newBudget)
      .then(response => {
        console.log(response.data);
        // Reset form fields
        setTitle('');
        setAmount('');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Add Budget</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Amount:</label>
          <input type="number" value={amount} onChange={e => setAmount(e.target.value)} required />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddBudgetForm;