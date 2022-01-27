import React from 'react';

class Forms extends React.Component {
  constructor() {
    super()

    this.handleSelect = this.handleSelect.bind(this);
    this.handleInputText = this.handleInputText.bind(this);
    this.handleInputColor = this.handleInputColor.bind(this);

    this.state = {
      select: 'Select',
      typedText: '',
      colorInput: '#000000',
    }
  }

  handleSelect(event) {
    this.setState({
      select: event.target.value,
    });
  }

  handleInputText(event) {
    this.setState({
      typedText: event.target.value,
    });
  }

  handleInputColor(event) {
    this.setState({
      colorInput: event.target.value,
    });
  }

  render() {
    return (
      <form className="form" action="">
        <span>Hobbies:</span>
        <select value={this.state.select} onChange={this.handleSelect} name="hobbies" id="">
          <option value="Select">Select</option>
          <option value="fortnite">Fornite</option>
          <option value="code">Code</option>
          <option value="eat">Eat well</option>
          <option value="finances">Finances</option>
          <option value="financial-market">Financial Market</option>
        </select>

        <br />
        <input value={this.state.typedText} onChange={this.handleInputText} type="text" />

        <br />
        <input value={this.state.colorInput} onChange={this.handleInputColor} type="color" name="" id="colorInput" />
      </form>
    );
  }
}

export default Forms;