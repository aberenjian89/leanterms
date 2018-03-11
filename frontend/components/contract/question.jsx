import React from 'react';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.state = this.props.contractState;
  }

  handleChange(e, formField) {
    let value = e.target.value;
    let formField2;
    let value2;

    if (formField == 'party') {
      if (e.target.value === 'Landlord') {
        formField = 'landlordId';
        formField2 = 'tenantId';
        value2 = undefined;
      } else {
        formField = 'tenantId';
        formField2 = 'landlordId';
        value2 = undefined;
      }
      value = this.props.currentUser.id;
    }
    this.setState({ [formField]: value }, () => {});
    if (formField2) {
      this.setState({ [formField2]: value2 });
    }
    if (e.target.value == 'Yes') {
      value = true;
    } else if (e.target.value == 'No') {
      value = false;
    }
    this.props.updateContractState(formField, value, formField2, value2);
  }

  render() {
    const {
      title,
      subtitle,
      body,
      radioButtons,
      textFields,
      textFieldStates,
      radioButtonState,
      dateField,
      dateButtonState
    } = this.props.question;

    return (
      <div className="wrap-contract-navigation">
        <form className="contract-form">
          <h2>{title}</h2>
          {subtitle ? <p>{subtitle}</p> : null}
          <p>{body}</p>

          {radioButtons
            ? radioButtons.map(
                (radioButton, i) =>
                  radioButtonState == 'party' ? (
                    <div className="form-radio-btns">
                      <label key={i}>
                        <input
                          name={radioButtonState}
                          type="radio"
                          value={radioButton}
                          checked={
                            (radioButton == 'Landlord' &&
                              this.state['landlordId']) ||
                            (radioButton == 'Tenant' && this.state['tenantId'])
                              ? 'checked'
                              : null
                          }
                          className={radioButtonState}
                          onChange={e => this.handleChange(e, radioButtonState)}
                        />
                        {radioButton}
                      </label>
                    </div>
                  ) : (
                    <div className="form-radio-btns">
                      <label key={i}>
                        <input
                          name={radioButtonState}
                          type="radio"
                          value={radioButton}
                          checked={
                            this.state[radioButtonState] == radioButton
                              ? 'checked'
                              : null
                          }
                          className={radioButtonState}
                          onChange={e => this.handleChange(e, radioButtonState)}
                        />
                        {radioButton}
                      </label>
                    </div>
                  )
              )
            : null}

          {textFields
            ? textFields.map((field, i) => (
                <label key={i}>
                  {field}
                  <input
                    type="text"
                    id={textFieldStates[i]}
                    value={this.state[textFieldStates[i]] || ''}
                    onChange={e => this.handleChange(e, textFieldStates[i])}
                  />
                </label>
              ))
            : null}

          {dateField ? (
            <label>
              {dateField}
              <input
                type="date"
                id={dateButtonState}
                value={this.state[dateButtonState]}
                onChange={e => this.handleChange(e, dateButtonState)}
              />
            </label>
          ) : null}
        </form>
      </div>
    );
  }
}

export default Question;
