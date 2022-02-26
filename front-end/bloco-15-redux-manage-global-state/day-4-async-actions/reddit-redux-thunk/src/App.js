import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from './component/Button';
import { fetchMessages } from './thunk/apiService';

class App extends Component {
  render(){
    const { postFetch, state} = this.props;

    return (
      <main>
        <header>
          <h1>Reddit byneur4l xxx</h1>
        </header>

          <Button
            value='frontend'
            onClick={ (e) => postFetch(e.target.value)}
          />

          <Button
            value='reactjs'
            onClick={ (e) => postFetch(e.target.value)}
          />


          <Button
            value='worldnews'
            onClick={ (e) => postFetch(e.target.value)}
          />


          <Button
            value='funny'
            onClick={ (e) => postFetch(e.target.value)}
          />


          <Button
            value='memes'
            onClick={ (e) => postFetch(e.target.value)}
          />

          <section className='postSection'>
            <div className='postList'>
              <ul>
                {
                  state.map((post) => {
                    const { data: { id, title, url }} = post;
                    return (
                    <li key={id}>
                      <a target="_blank" rel="noreferrer" href={url}>{title}</a>
                    </li>
                    )
                  })
                }
              </ul>
            </div>
          </section>

      </main>
    )
  }
}

const mapStateToProps = state => {
  if (state.reducerReact.data.length === 0) {
    return { state: state.reducerReact.data }
  }
  return { state: state.reducerReact.data.data }
}

const mapDispatchToProps = dispatch => ({
  postFetch: (name) => dispatch(fetchMessages(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);