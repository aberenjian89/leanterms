import React from 'react';
import ProgressBar from './progress_bar';
import ContractFormNavigation from './contract_form_navigation';
import Questions from './questions';
import Question from './question';

class ContractForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentQuestionIdx: 0 };
    this.totalNumQuestions = Questions.length;
    this.updateContractState = this.updateContractState.bind(this);
    this.navigateToQuestion = this.navigateToQuestion.bind(this);
  }

  componentDidMount() {
    if (this.props.currentUser) {
      this.props.fetchAllUserContracts(this.props.currentUser.id);
    }
  }

  navigateToQuestion(idx) {
    this.setState({ currentQuestionIdx: idx });
  }

  updateContractState(formField, value, formField2, value2) {
    console.log(this.state);
    this.setState({ [formField]: value }, () => {});
    if (formField2) {
      this.setState({ [formField2]: value2 });
    }
  }

  handleArrow(direction) {
    const { currentQuestionIdx } = this.state;

    if (direction === 'prev') {
      if (this.state.currentQuestionIdx === 0) return;
      this.setState({ currentQuestionIdx: currentQuestionIdx - 1 });
    } else {
      if (currentQuestionIdx === this.totalNumQuestions - 1) return;
      this.setState({ currentQuestionIdx: currentQuestionIdx + 1 });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createContract(this.state);
  }

  render() {
    let question = Questions[this.state.currentQuestionIdx];

    return (
      <div className="contract-form-wrapper">
        <div className="contract-title">
          <h1>California Residential Lease Agreement</h1>
        </div>
        <ProgressBar
          progress={this.state.currentQuestionIdx}
          totalWidth={this.totalNumQuestions}
        />
        <div id="question-navigation-container">
          <div id="contract-form-left-container">
            <div className="buttons">
              {this.state.currentQuestionIdx > 0 ? (
                <button
                  type="button"
                  onClick={() => this.handleArrow('prev')}
                  className="prvbtn"
                >
                  <i id="prv-icon" className="fa fa-arrow-left" />Previous
                </button>
              ) : null}

              {this.state.currentQuestionIdx === this.totalNumQuestions - 1 ? (
                <button
                  type="button"
                  onClick={e => this.handleSubmit(e)}
                  className="nextbtn"
                >
                  Submit
                  <i id="next-icon" className="fa fa-arrow-right" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => this.handleArrow('next')}
                  className="nextbtn"
                >
                  Next
                  <i id="next-icon" className="fa fa-arrow-right" />
                </button>
              )}
            </div>
            <Question
              question={question}
              currentUser={this.props.currentUser}
              updateContractState={this.updateContractState}
              contractState={this.state}
            />
          </div>
          <ContractFormNavigation
            currentQuestionIdx={this.state.currentQuestionIdx}
            navigateToQuestion={this.navigateToQuestion}
          />
        </div>
      </div>
    );
  }
}

export default ContractForm;
