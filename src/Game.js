import React from "react";
import { Square } from "./Square";

export default class Game extends React.Component {
  render() {
    return (
      <div className="Game">
        <div>
          <Square />
          <Square />
          <Square />
        </div>
        <div>
          <Square />
          <Square />
          <Square />
        </div>
        <div>
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    );
  }
}
