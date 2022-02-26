import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from './component/Button';
import { fetchMessages } from './thunk/apiService';
import './App.css';

class App extends Component {
  render(){
    const { postFetch, state} = this.props;

    return (
      <main>
        <header>
          <h1>Reddit byneur4l xxx</h1>
        </header>


        <section className='sectionButton'>
          <div className='block'>
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
          </div>
        </section>

        <section className='postSection'>
          <div className='postList'>
            <ol>
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
            </ol>
          </div>
        </section>

        <footer className='footer'>
          <h5 className='footer'>Conteúdo compilado por Lucas Barbosa dos Reis</h5>
          <h6 className='footer'>São Paulo, 25/02/2022</h6>
        </footer>

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