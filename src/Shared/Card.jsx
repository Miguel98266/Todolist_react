import React, { Component } from "react";
import Button from "./Button";

export default class extends Component {
  render() {
    return (
      <div className="d-flex justify-content-between mt-2" key={this.props.key}>
        <h5>{this.props.item}</h5>
        <Button
          handleAction={this.props.handleAction}
          labelButton={this.props.labelButton}
          styles={this.props.styles}
        ></Button>
      </div>
    );
  }
}
