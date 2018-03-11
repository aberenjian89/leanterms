import React from 'react';

class ContractFormNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.sections = [
      'Parties',
      'Lease Type',
      'Effective Date',
      'Notice',
      'Property Type',
      'Property Address',
      'Furniture',
      'Parking',
      "Landlord's Address",
      'Rent Amount',
      'Rent Due Date',
      'Rent Payment',
      'Deposit Terms',
      'First and Last',
      'Late Fees',
      'Utilities',
      'Pet Policy',
      'Subletting Policy',
      'Guests',
      'Signing Date'
    ];
  }

  handleClick(idx) {
    this.props.navigateToQuestion(idx);
    this.setState({ currentSection: this.sections[idx] });
  }

  render() {
    const boldStyle = {
      fontWeight: 'bold'
    };

    return (
      <div className="navigation">
        <ul>
          {this.sections.map(
            (section, i) =>
              this.props.currentQuestionIdx === i ? (
                <li
                  style={boldStyle}
                  key={i}
                  onClick={() => this.handleClick(i)}
                >
                  {section}
                </li>
              ) : (
                <li key={i} onClick={() => this.handleClick(i)}>
                  {section}
                </li>
              )
          )}
        </ul>
      </div>
    );
  }
}

export default ContractFormNavigation;
