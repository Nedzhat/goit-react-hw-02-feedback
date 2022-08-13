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
  bad: 0
  }
  
  addedFeedback = evt => {
    const curBtn = evt.target.textContent.toLowerCase();
    for (const key in this.state) {
      if (key === curBtn) {
           this.setState((prevState) => {
      return {
        [key]: prevState[key] + 1,
      }
    })
      }
    }
  } 

  countTotalFeedback = () => {
    let total = 0;
    for (const key in this.state) {
      total += this.state[key];
      }
    return total;
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
          <FeedbackOptions options={this.state} onLeaveFeedback={this.addedFeedback}/>
          {this.countTotalFeedback() > 0 ? (<Statistics good={good} neutral={neutral} bad={bad} onTotal={this.countTotalFeedback()} onCheckPercentage={this.countPositiveFeedbackPercentage(this.countTotalFeedback())}/>) : <Notification message="There is no feedback" />}
        </Section >
      </div>
  );
  }
};
