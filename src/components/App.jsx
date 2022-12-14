import { Component } from 'react';

import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from 'components/Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;

    const feedbackPercentage = (good / this.countTotalFeedback()) * 100;

    return feedbackPercentage.toFixed(0) + '%';
  };

  onLeaveFeedback = e => {
    const { name } = e.target;
    const initialState = this.state[name];

    this.setState({ [name]: initialState + 1 });
  };

  render() {
    const { good, neutral, bad } = this.state;

    const optionsKeys = Object.keys(this.state);

    const isEmptyFeedback = this.countTotalFeedback() === 0;

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={optionsKeys}
            onLeaveFeedback={this.onLeaveFeedback}
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
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}
