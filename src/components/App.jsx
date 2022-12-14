import { useState } from 'react';

import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from 'components/Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const feedbackPercentage = (good / countTotalFeedback()) * 100;

    return feedbackPercentage.toFixed(0) + '%';
  };

  const onLeaveFeedback = name => {
    switch (name) {
      case 'good':
        setGood(value => value + 1);
        break;
      case 'neutral':
        setNeutral(value => value + 1);
        break;
      case 'bad':
        setBad(value => value + 1);
        break;
      default:
        return;
    }
  };

  const optionsKeys = ['good', 'neutral', 'bad'];

  const isEmptyFeedback = countTotalFeedback() === 0;

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={optionsKeys}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {isEmptyFeedback ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
};
