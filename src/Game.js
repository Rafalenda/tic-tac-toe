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
    this.setState({ value: "o" });
  }

  render() {
    return (
      <div className="Game">
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
