import secretWord from './secretWord'
import React, { Component } from 'react'
import WordItem from './WordItem'

class WordsList extends Component {
  render () {
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
      {wordItems}
      </div>
    );
  }
}


export default WordsList
