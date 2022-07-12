import React, { Component } from 'react'

export default class InputValue extends Component {
  render() {
    return (
        <>
            <input
            type={this.props.type}
            className="form-control"
            placeholder={this.props.placeholderInput}
            onChange={(e) => this.props.handleValue(e.target.value)}
          />
        </>
      
    )
  }
}
