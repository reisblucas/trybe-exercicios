import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMessages } from './thunk/apiService';

class App extends Component {
  render(){
    const {postChanger} = this.props;
    return (
      <main>
        <header>
          <h1>Reddit byneur4l xxx</h1>
  
          <button
            value='frontend'
            onClick={ (e) => postChanger(e.target.value) }
          >
            Frontend
          </button>
        </header>
      </main>
    )
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { iss: state}
}

const mapDispatchToProps = dispatch => ({
  postChanger: (name) => dispatch(fetchMessages(name)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);