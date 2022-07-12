import React, { Component } from "react";

export default class form extends Component {
  render() {
    return (
        <button
                onClick={this.props.handleAction}
                className={this.props.styles}>
                {this.props.labelButton}
            </button>
    );
  }
}
