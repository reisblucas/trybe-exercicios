import React from 'react';
import Input from './Input';
import Select from './Select';

class Forms extends React.Component {
  constructor() {
    super()

    this.handleChanges = this.handleChanges.bind(this);

    this.state = {
      select: 'Select',
      typedText: '',
      inputColor: '#000000',
      checkbox: false,
    }
  }

  handleChanges({ target }) {
    const { name, checked, type } = target;
    const value = checked === true ? true : target.value;

    // if (type === 'checkbox') {

    // }

    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <form className="form" action="">
        <fieldset>
          <legend>Forms</legend>

          <Select
            onChange={this.handleChanges}
            name="select"
          />

          <Input type={"text"} value={this.state.typedText} onChange={this.handleChanges} name={"typedText"} />
          <Input type={"color"} value={this.state.inputColor} onChange={this.handleChanges} name={"inputColor"} />
          <Input type={"checkbox"} value={this.state.checkbox} onChange={this.handleChanges} name={"checkbox"} id={'teste'} />
        </fieldset>
      </form>
    );
  }
}

export default Forms;