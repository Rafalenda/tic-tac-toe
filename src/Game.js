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
  handleClick2(SqAddress) {
    //when I click I want to change the value of the state; if it is X change to O and vice versa
    if (this.state.value === "X") {
      this.setState({ value: "O" });
    } else {
      this.setState({ value: "X" });
    }
    //determine the winner when user clicks on the square 1.
    if (SqAddress === "1") {
      this.setState({ winner: this.state.value });
    }
  }

  render() {
    return (
      <div className="Game">
        {<h2>{this.state.winner} is winner</h2>}
        <div>
          <Square
            jogada={this.state.value}
            onClick={() => {
              this.handleClick2("1");
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
