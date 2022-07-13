import React, { Component } from "react";
import InputValue from "./InputValue";
import Button from "./Button";
export default class Form extends Component {
  render() {
    return (
      <form className="row">
        <div className="col-md-9">
          <InputValue
            type={this.props.type}
            placeholderInput={this.props.placeholderInput}
            handleValue={this.props.handleValue}
            nameError={this.props.nameError}
          />
        </div>
        <div className="col-md-3">
          <Button
            handleAction={this.props.handleAction}
            labelButton={this.props.labelButton}
            styles={this.props.styles}
          ></Button>
        </div>
      </form>
    );
  }
}
