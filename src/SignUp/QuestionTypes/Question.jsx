import React from 'react';

import DateOfBirthQuestion from './DateOfBirthQuestion';
import SelectQuestion from './SelectQuestion';
import LifestyleQueryQuestion from './LifestyleQueryQuestion';
import LocationQuestion from './LocationQuestion';
import DiscreteSliderQuestion from './DiscreteSliderQuestion';
import ContinuousSliderQuestion from './ContinuousSliderQuestion';
import VehiclesQuestion from './VehiclesQuestion';
import HomeQuestion from './HomeQuestion';

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.submitQuestion = this.submitQuestion.bind(this);
  }
  render() {
    let question;
    switch(this.props.type) {
      case 'lifestyle':
        question = <LifestyleQueryQuestion {...this.props} submitQuestion={this.submitQuestion} />
        break;
      case 'dob':
        question = <DateOfBirthQuestion {...this.props} submitQuestion={this.submitQuestion} />
        break;
      case 'select':
        question = <SelectQuestion {...this.props} submitQuestion={this.submitQuestion} />
        break;
      case 'location':
        question = <LocationQuestion {...this.props} submitQuestion={this.submitQuestion} />
        break;
      case 'discreteslider':
          question = <DiscreteSliderQuestion {...this.props} submitQuestion={this.submitQuestion} />
          break;
      case 'continuousslider':
          question = <ContinuousSliderQuestion {...this.props} submitQuestion={this.submitQuestion} />
          break;
      case 'vehicles':
          question = <VehiclesQuestion {...this.props} submitQuestion={this.submitQuestion} />
          break;
      case 'home':
        question = <HomeQuestion {...this.props} submitQuestion={this.submitQuestion} />
        break;
      default:
        return null;
    }
    const classes = "question" + (this.state.isAnimating ? " fadeOutLeft" : "");
    return <div ref='question' className={classes}>
      {question}
    </div>
  }

  submitQuestion(name, value, nextQuestions) {
    const onAnimationFinished = () => {
      this.refs.question.removeEventListener('animationend', onAnimationFinished);
      this.props.submitQuestion(name, value, nextQuestions);
    };
    this.refs.question.addEventListener('animationend', onAnimationFinished);
    this.setState({isAnimating: true});
  }
}
