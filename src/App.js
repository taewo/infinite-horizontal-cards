import React, { Component } from 'react';
import './App.css';

class App extends Component {

  componentDidMount() {
    const elements = document.getElementsByClassName("card--content")
    console.log('elements....', elements);
    for (let i = 0; i < elements.length; i += 1) {
      elements[i].addEventListener('mouseenter', function(e) {
        console.log('i..', i)
        // elements[i].style.width = "400px"
        // elements[i].style.height = "400px"
        elements[i].style.WebkitTransition = "all 3s"
      })
    }
  }

  render() {
    return (
      <div>
        <section className="card">
          <div className="card--content"></div>
          <div className="card--content"></div>
          <div className="card--content"></div>
          <div className="card--content"></div>
          <div className="card--content"></div>
          <div className="card--content"></div>
          <div className="card--content"></div>
          <div className="card--content"></div>
          <div className="card--content"></div>
          <div className="card--content"></div>
        </section>
      </div>
    );
  }
}

export default App;
