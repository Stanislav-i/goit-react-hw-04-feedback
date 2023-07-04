import React, { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions.jsx';
import { Statistics } from './Statistics/Statistics.jsx';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = e => {
    const btnId = e.currentTarget.id;

    switch (btnId) {
      case 'good':
       setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        console.log('well this is weird :)');
    }
  };

  const countTotal = () => {
    return good + bad + neutral;
  }

  const countPositivePercentage = (totalCount) => { 
    return ((good * 100) / totalCount).toFixed(1);
  }

    const total = countTotal();
    const percentage = countPositivePercentage(total);

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '100px',
          color: "white"
        }}
      >
        <h1>Please leave feedback</h1>
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback} />
        <Statistics
          goodValue={good}
          neutralValue={neutral}
          badValue={bad}
          total={total}
          percentage={percentage}
        />
      </div>
    );
}
