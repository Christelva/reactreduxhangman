import secretWord from './secretWord'
import React, { Component } from 'react'
import WordItem from './WordItem'

class WordsList extends Component {

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
  render (

  ) {
    let wordItem;
    if(this.props.words){
      var wordItems = this.props.words.map(word => {

      return (
        <WordItem key={word.word} word={word} />
      );
    });

    }
    return(
      <div className="WordsList">
      {wordItems[Math.floor(Math.random()*wordItems.length)]}
      </div>

    );
  }
}


export default WordsList
