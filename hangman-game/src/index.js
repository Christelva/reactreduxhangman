import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class GuessedLetters extends React.Component {
  render(){
    return(
      <div>
      </div>

    )
  }
}
class Block extends React.Component {
  render(){
    return(
      <div>

      Block
      </div>
    );
  }
}
class Main extends React.Component {
  constructor(){
  super();

  this.state = {
    life: 8,
    guessed: 0
  }
}
  render() {
    return(
      <div>
      <h1> Hangman </h1>
      <Block
      />
      <h3> Guessed letters: {this.state.guessed} </h3>
      <h2> Lifes left: {this.state.life}</h2>

      </div>
    )
  }
}
ReactDOM.render(<Main />, document.getElementById('root'));
