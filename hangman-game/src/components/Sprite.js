import React, { Component } from 'react'

class Sprite extends Component {
  render(){
    return (
      <div className="Sprite">
      <h4>{this.props.content}</h4>
      </div>
    );
  }
}

export default Sprite;
