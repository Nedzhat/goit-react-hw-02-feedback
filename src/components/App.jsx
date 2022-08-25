import { GlobalStyle } from 'components/GlobalStyle';
import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0,
  }
  
  addFeedback = feedback => {
    let feedbackNormalized = feedback.toLowerCase();
    this.setState((prevState) => {
      return {
        [feedbackNormalized]: prevState[feedbackNormalized] + 1,
      }
    })
  }

  countTotalFeedback = () => {
    let total = Object.values(this.state);
    const totalFeedback = total.reduce((prev, number) => {
      return prev + number;
    }, 0);
    return totalFeedback;
  }

  countPositiveFeedbackPercentage = (total) => {
    let percentage = this.state.good / total * 100;
    if (!percentage) {
      percentage = 0;
    }
    return parseInt(percentage);
  }

  render() {
    const { good, neutral, bad } = this.state; 
    
    return (
    <div>
        <GlobalStyle />
        <Section title='Please leave feedback'>
          <FeedbackOptions options={this.state} onLeaveFeedback={this.addFeedback}/>
          {this.countTotalFeedback() > 0 ? (<Statistics good={good} neutral={neutral} bad={bad} onTotal={this.countTotalFeedback()} onCheckPercentage={this.countPositiveFeedbackPercentage(this.countTotalFeedback())}/>) : <Notification message="There is no feedback" />}
        </Section >
      </div>
  );
  }
};
