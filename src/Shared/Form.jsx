import React, { Component } from "react";

export default class form extends Component {
  render() {
    return (
        <form className="row ">
        <div className="col-9">
          <input
            type={this.props.type}
            className="form-control"
            placeholder={this.props.placeholderInput}
            onChange={(e) => this.props.handleValue(e.target.value)}
          />
        </div>
        <div className="col-3">
          <button
            onClick={this.props.handleAction}
            className="btn btn-primary mb-3"
          >
            {this.props.labelButton}
          </button>
        </div>
      </form>
    );
  }
}
