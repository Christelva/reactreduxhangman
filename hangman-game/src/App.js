import React, { Component } from 'react';
import './App.css';
import Title from './components/Title'
import Sprite from './components/Sprite'
import WordsList from './components/WordsList'

class App extends Component {
  constructor(){
    super();
    this.state = {
      words: []

    }
  }

  componentWillMount(){
    this.setState({words: [
      {
        word: 'accomodate'
      },
      {
        word: 'handkerchief'
      },
      {
        word: 'rhythm'
      },
      {
        word: 'embarass'
      },
      {
        word: 'pronunciation'
      },
      {
        word: 'alpaca'
      }


    ]});

  }

  render() {
    return (

  <div className="App">
  <Title content= "Hangman"/>
<Sprite content= "Sprite" />
<WordsList words={this.state.words} />





  </div>
    );
  }
}


export default App;
