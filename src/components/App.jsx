import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { Container } from './App.styled';


export class App extends Component {
  static defaultProps = {
        initialValue: 0,
    }
    state = {
        good: this.props.initialValue,
        neutral: this.props.initialValue,
        bad: this.props.initialValue
    };
  handleIncrement = ({ target }) => {
    const name = target.name;
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round((good* 100) / (good + neutral + bad));
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
         <Container>
            <Section title="Please leave feedback">
               <FeedbackOptions
                   onLeaveFeedback={this.handleIncrement}
                   options={Object.keys(this.state)} />
            </Section>
            {this.countTotalFeedback() <= 0 ? <Notification message="There is no feedback"/> :    
            <Section title="Statistics">
               <Statistics
                  good={good}
                  neutral={neutral}
                  bad={bad}
                  total={this.countTotalFeedback()}
                  positivePercentage={this.countPositiveFeedbackPercentage()} />
            </Section> 
            }     
          </Container>
        );
    }
};
