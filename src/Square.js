import React from "react";

export class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  handleClick() {
    if (this.state.value === null) {
      this.setState({
        value: this.props.jogada,
      });
      this.props.onClick();
    }
  }

  render() {
    return (
      <button className="btn btn-success" onClick={() => this.handleClick()}>
        {this.state.value}
      </button>
    );
  }
}
