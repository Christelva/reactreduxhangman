import React, { Component } from 'react';

class WordItem extends Component {
  render() {
    return (
       <li className="WordsList">
        {this.props.word.word}
        </li>
    );
  }
}

export default WordItem;
