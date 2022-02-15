import React from 'react';

class Input extends React.Component {
  render() {
    const { value, type, onChange, name, id } = this.props;
    // const specialCase = 
    // // if (type === 'checkbox' && value === 'true') {
    // //   const specialCase = false;
    // //   return specialCase;
    // // }

    return (
      <input value={value} type={type} onChange={onChange} name={name} id={id} />
    );
  }
}

export default Input;