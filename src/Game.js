import React from "react";
import { Square } from "./Square";

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "X",
      winner: null,
      playersIndex: {},
    };
  }
  handleClick2(SqAddress) {
    //store this.state.value of the current square in this.state.squares
    let newPlayersIndex = JSON.parse(JSON.stringify(this.state.playersIndex));
    newPlayersIndex[SqAddress] = this.state.value;
    const newState = {
      playersIndex: newPlayersIndex,
    };
    this.setState(newState);

    //determine the winner for all the cases
    if (
      (newPlayersIndex["1"] &&
        newPlayersIndex["1"] === newPlayersIndex["2"] &&
        newPlayersIndex["2"] === newPlayersIndex["3"]) ||
      (newPlayersIndex["4"] &&
        newPlayersIndex["4"] === newPlayersIndex["5"] &&
        newPlayersIndex["5"] === newPlayersIndex["6"]) ||
      (newPlayersIndex["7"] &&
        newPlayersIndex["7"] === newPlayersIndex["8"] &&
        newPlayersIndex["8"] === newPlayersIndex["9"]) ||
      (newPlayersIndex["1"] &&
        newPlayersIndex["1"] === newPlayersIndex["4"] &&
        newPlayersIndex["4"] === newPlayersIndex["7"]) ||
      (newPlayersIndex["2"] &&
        newPlayersIndex["2"] === newPlayersIndex["5"] &&
        newPlayersIndex["5"] === newPlayersIndex["8"]) ||
      (newPlayersIndex["3"] &&
        newPlayersIndex["3"] === newPlayersIndex["6"] &&
        newPlayersIndex["6"] === newPlayersIndex["9"]) ||
      (newPlayersIndex["1"] &&
        newPlayersIndex["1"] === newPlayersIndex["5"] &&
        newPlayersIndex["5"] === newPlayersIndex["9"]) ||
      (newPlayersIndex["3"] &&
        newPlayersIndex["3"] === newPlayersIndex["5"] &&
        newPlayersIndex["5"] === newPlayersIndex["7"])
    ) {
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
