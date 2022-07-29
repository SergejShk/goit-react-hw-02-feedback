import React, { Component } from 'react';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Notification from './notification/Notification';
import Section from './section/Section';
import Statistics from './statistics/Statistics';

const options = [
  { title: 'Good', name: 'good' },
  { title: 'Neutral', name: 'neutral' },
  { title: 'Bad', name: 'bad' },
];

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickBtn = e => {
    const { name } = e.target;
    this.setState(prev => ({ [name]: prev[name] + 1 }));
  };
  countTotalFeedback = () => {
    const valuesState = Object.values(this.state);
    return valuesState.reduce((acc, value) => (acc += value), 0);
  };
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return ((this.state.good / total) * 100).toFixed(0);
  };

  render() {
    const totalCount = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={this.onClickBtn} />
        {totalCount === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={totalCount}
            positivePercentage={positiveFeedback}
          />
        )}
      </Section>
    );
  }
}

export default App;
