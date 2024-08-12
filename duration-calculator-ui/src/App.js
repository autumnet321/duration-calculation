import React, { useState } from 'react';
import { differenceInDays, differenceInWeeks, differenceInMonths, parseISO } from 'date-fns';
import './App.css';

function App() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [result, setResult] = useState(null);

  const calculateDuration = () => {
    const start = parseISO(startDate);
    const end = parseISO(endDate);

    const days = differenceInDays(end, start);
    const weeks = differenceInWeeks(end, start);
    const months = differenceInMonths(end, start);

    setResult({ days, weeks, months });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Duration Calculator</h1>
        <div className="date-inputs">
          <label>
            Start Date:
            <input 
              type="date" 
              value={startDate} 
              onChange={(e) => setStartDate(e.target.value)} 
            />
          </label>
          <label>
            End Date:
            <input 
              type="date" 
              value={endDate} 
              onChange={(e) => setEndDate(e.target.value)} 
            />
          </label>
        </div>
        <button onClick={calculateDuration}>Calculate Duration</button>
        {result && (
          <div className="result">
            <p>Days: {result.days}</p>
            <p>Weeks: {result.weeks}</p>
            <p>Months: {result.months}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;