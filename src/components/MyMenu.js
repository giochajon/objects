import React from "react";
import ReactDOM from "react-dom";
import logo from "../logo.svg";
import IconList from "./IconList";
import MathComp from "./MathComp";
import AccountInterface from "./AccountInterface"

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.ico}
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    };
  }

  handleClick(i) {
    //const squares = this.state.squares.slice();
    //alert (i);

    //squares[i] = this.state.xIsNext ? 'X' : 'O';
    //options for menu:

    switch (i) {
      case 0:
        this.setState({
          xIsNext: (
            <div>
              <img
                onMouseOver={() => console.log("Hovered!")}
                src="https://www.fillmurray.com/200/100"
                alt="willy"
              />
            </div>
          )

          //        xIsNext: i,
        });
        break;

      case 1:
        this.setState({ xIsNext: <MathComp /> });
        break;

      case 2:
        this.setState({ xIsNext: <AccountInterface initialName="Gio" initialBalance="100"  /> });
        break;




      default:
        this.setState({
          xIsNext: (
            <div>
              <h2>you pressed button {i}</h2>

              <img src={logo} className="App-logo" alt="logo" />
            </div>
          )
        });
    }
  }
  renderSquare(i) {
    //console.log ("ite",IconList[i].icon)
    return (
      <Square
        value={this.state.squares[i]}
        ico={IconList[i].icon}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    let status = this.state.xIsNext;

    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
        </div>
        {status}
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));

export default Game;
