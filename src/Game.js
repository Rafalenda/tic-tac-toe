import React from "react";
import { Square } from "./Square";

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "X",
    };
  }
  handleClick() {
    if (this.state.value === "X") {
      this.setState({ value: "o" });
    } else {
      this.setState({ value: "X" });
    }
  }

  render() {
    return (
      <div className="Game">
        <span>{this.state.value}</span>
        <div>
          <Square
            jogada={this.state.value}
            onClick={() => {
              this.handleClick();
            }}
          />
          <Square
            jogada={this.state.value}
            onClick={() => {
              this.handleClick();
            }}
          />
          <Square
            jogada={this.state.value}
            onClick={() => {
              this.handleClick();
            }}
          />
        </div>
        <div>
          <Square
            jogada={this.state.value}
            onClick={() => {
              this.handleClick();
            }}
          />
          <Square
            jogada={this.state.value}
            onClick={() => {
              this.handleClick();
            }}
          />
          <Square
            jogada={this.state.value}
            onClick={() => {
              this.handleClick();
            }}
          />
        </div>
        <div>
          <Square
            jogada={this.state.value}
            onClick={() => {
              this.handleClick();
            }}
          />
          <Square
            jogada={this.state.value}
            onClick={() => {
              this.handleClick();
            }}
          />
          <Square
            jogada={this.state.value}
            onClick={() => {
              this.handleClick();
            }}
          />
        </div>
      </div>
    );
  }
}
