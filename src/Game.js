import React from "react";
import { Square } from "./Square";

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "X",
      winner: null,
      squares: {},
    };
  }
  handleClick2(SqAddress) {
    //store this.state.value of the current square in this.state.squares
    let newSquares = JSON.parse(JSON.stringify(this.state.squares));
    newSquares[SqAddress] = this.state.value;
    const newState = {
      squares: newSquares,
    };
    this.setState(newState);

    //determine the winner when player of square 1 is the same as of square 2
    if (newSquares["1"] && newSquares["1"] === newSquares["2"]) {
      this.setState({ winner: this.state.value });
    }

    //avoid changing state of object if there is a winner
    if (this.state.winner === null) {
      //when I click I want to change the value of the state; if it is X change to O and vice versa
      if (this.state.value === "X") {
        this.setState({ value: "O" });
      } else {
        this.setState({ value: "X" });
      }
    }
  }

  render() {
    return (
      <div className="Game">
        {this.state.winner && <h2>{this.state.winner} is winner</h2>}
        <div>
          <Square
            jogada={this.state.value}
            onClick2={() => {
              this.handleClick2("1");
            }}
            winner={this.state.winner}
          />
          <Square
            jogada={this.state.value}
            onClick2={() => {
              this.handleClick2("2");
            }}
            winner={this.state.winner}
          />
          <Square
            jogada={this.state.value}
            onClick2={() => {
              this.handleClick2("3");
            }}
            winner={this.state.winner}
          />
        </div>
        <div>
          <Square
            jogada={this.state.value}
            onClick2={() => {
              this.handleClick2("4");
            }}
            winner={this.state.winner}
          />
          <Square
            jogada={this.state.value}
            onClick2={() => {
              this.handleClick2("5");
            }}
            winner={this.state.winner}
          />
          <Square
            jogada={this.state.value}
            onClick2={() => {
              this.handleClick2("6");
            }}
            winner={this.state.winner}
          />
        </div>
        <div>
          <Square
            jogada={this.state.value}
            onClick2={() => {
              this.handleClick2("7");
            }}
            winner={this.state.winner}
          />
          <Square
            jogada={this.state.value}
            onClick2={() => {
              this.handleClick2("8");
            }}
            winner={this.state.winner}
          />
          <Square
            jogada={this.state.value}
            onClick2={() => {
              this.handleClick2("9");
            }}
            winner={this.state.winner}
          />
        </div>
      </div>
    );
  }
}
