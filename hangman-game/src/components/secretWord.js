import React, { Component } from 'react';
import WordList from './WordsList'


class secretWord extends Component {
  render() {
    return(
      <h1 className="secret">{this.props.content}</h1>
    )
  }
}
