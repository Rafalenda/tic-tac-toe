import React from "react";

export class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "?",
    };
  }
  handleClick() {
    this.setState(
      (this.newState = {
        value: "X",
      })
    );
  }

  render() {
    return (
      <button className="btn btn-success" onClick={() => this.handleClick()}>
        {this.state.value}
      </button>
    );
  }
}
