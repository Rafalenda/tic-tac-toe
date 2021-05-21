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
    //avoid changing state of object if there is a winner
    if (this.state.winner === null) {
      //when I click I want to change the value of the state; if it is X change to O and vice versa
      if (this.state.value === "X") {
        this.setState({ value: "O" });
      } else {
        this.setState({ value: "X" });
      }
    }
    //determine the winner when user clicks on the square 1.
    if (SqAddress === "1") {
      this.setState({ winner: this.state.value });
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
      </div>
    );
  }
}
