import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Title.csss'

class Title extends PureComponent {
  render() {
    return(
      <h1 className="Title">{this.props.content}</h1>
    )
  }
}

export default Title
