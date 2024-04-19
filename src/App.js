import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BudgetList from './components/BudgetList';
import AddBudgetForm from './components/AddBudgetForm';
import Main from './Layouts/Main';


function App() {
  return (
    <Router>
      <div className="App">
    
        <Routes>
          <Route exact path="/" element={< Main/>} />
          <Route path="/badgeList" element={<BudgetList />} />
          <Route path="/add-budget" element={<AddBudgetForm />} />
        </Routes>
   
      </div>
    </Router>
  );
}

export default App;