import React, { Component } from "react";

export default class Note extends Component {
    clickHandler(id) {
        this.props.onRemove(id)
    }

  render() {
    let { id, title, color } = this.props;

    return (
      <div
        className="card shadow-sm rounded"
        style={{ backgroundColor: color }}
        onClick={this.clickHandler.bind(this, id)}
      >
        <p className="card-text p-3">{title}</p>
      </div>
    );
  }
}
