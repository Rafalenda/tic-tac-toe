import React from "react";

export class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  handleClick() {
    //if there is a winner do not execute next lines
    if (this.props.winner != null) {
      return;
    }

    if (this.state.value === null) {
      this.setState({
        value: this.props.jogada,
      });
      this.props.onClick2();
    }
  }

  render() {
    return (
      <button
        className="btn btn-success"
        onClick={() => {
          this.handleClick();
        }}
      >
        {this.state.value}
      </button>
    );
  }
}
