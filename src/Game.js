import React from "react";
import { Square } from "./Square";

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "X",
      winner: null,
    };
  }
  handleClick2() {
    //when I click I want to change the value of the state; if it is X change to O and vice versa
    if (this.state.value === "X") {
      this.setState({ value: "O" });
    } else {
      this.setState({ value: "X" });
    }
  }

  render() {
    return (
      <div className="Game">
        {this.state.winner && <h2>{this.state.winner} is winner</h2>}
        <div>
          <Square
            jogada={this.state.value}
            onClick={() => {
              this.handleClick2();
            }}
          />
          <Square
            jogada={this.state.value}
            onClick={() => {
              this.handleClick2();
            }}
          />
          <Square
            jogada={this.state.value}
            onClick={() => {
              this.handleClick2();
            }}
          />
        </div>
        <div>
          <Square
            jogada={this.state.value}
            onClick={() => {
              this.handleClick2();
            }}
          />
          <Square
            jogada={this.state.value}
            onClick={() => {
              this.handleClick2();
            }}
          />
          <Square
            jogada={this.state.value}
            onClick={() => {
              this.handleClick2();
            }}
          />
        </div>
        <div>
          <Square
            jogada={this.state.value}
            onClick={() => {
              this.handleClick2();
            }}
          />
          <Square
            jogada={this.state.value}
            onClick={() => {
              this.handleClick2();
            }}
          />
          <Square
            jogada={this.state.value}
            onClick={() => {
              this.handleClick2();
            }}
          />
        </div>
      </div>
    );
  }
}
