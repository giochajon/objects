import React from "react";
import logo from "../logo.svg";
import IconList from "./IconList";
import MathComp from "./MathComp";
import AccountInterface from "./AccountInterfaceOld"
import AccountController from "./AccountControllerInterface"
import CitiesComp from "./CitiesComp"
import LinkedListInterface from "./LinkedListInterface"

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.ico}
      {props.value}
    </button>
  );
}

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(5).fill(null),
      itemSelected: true
    };
  }

  handleClick(i) {
   

    switch (i) {
      case 0:
        this.setState({
          itemSelected: (
            <div>
              <img
                //onMouseOver={() => console.log("Hovered!")}
                src="https://www.fillmurray.com/200/100"
                alt="willy"
              />
            </div>
          )

          //        itemSelected: i,
        });
        break;

      case 1:
        this.setState({ itemSelected: <MathComp /> });
        break;

      case 2:
        this.setState({ itemSelected: <AccountInterface initialName="Gio" initialBalance="100"  /> });
        break;
      
      case 3:
        this.setState({ itemSelected: <AccountController /> });
        break;

case 4:
        this.setState({ itemSelected: <CitiesComp /> });
        break;
      
case 5:
        this.setState({ itemSelected: <LinkedListInterface /> });
        break;

      default:
        this.setState({
          itemSelected: (
            <div>
              <h2>you pressed button {i}</h2>

              <img src={logo} className="App-logo" alt="logo" />
            </div>
          )
        });
    }
  }
  renderMenuItem(i) {
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
    let status = this.state.itemSelected;

    return (
      <div>
        <div className="Menu-row">
          {this.renderMenuItem(0)}
          {this.renderMenuItem(1)}
          {this.renderMenuItem(2)}
          {this.renderMenuItem(3)}
          {this.renderMenuItem(4)}
          {this.renderMenuItem(5)}
        </div>
        {status}
      </div>
    );
  }
}

export default Menu;
