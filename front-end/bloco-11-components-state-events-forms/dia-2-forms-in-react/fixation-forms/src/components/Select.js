import React from 'react';

class Select extends React.Component {
  render() {
    const { onChange, name } = this.props;

    return (
      <label htmlFor="selectForm">
        Hobbies:
        <select onChange={onChange} name={name} id="selectForm">
          <option value="Select">Select</option>
          <option value="fortnite">Fornite</option>
          <option value="code">Code</option>
          <option value="eat">Eat well</option>
          <option value="finances">Finances</option>
          <option value="financial-market">Financial Market</option>
        </select>
      </label>
    );
  }
}

export default Select;