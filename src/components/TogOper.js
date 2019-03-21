import React from "react";

const imagesPath = {
  plus: <i className="fas fa-plus" />,
  minus: <i className="fas fa-minus" />,
  mult: <i className="fas fa-times" />,
  divi: <i className="fas fa-divide" />
};

class TogOper extends React.Component {
  state = {
    open: 0,
    oper: "+"
  };
  toggleImage = () => {
    switch (this.state.open) {
      case 0:
        this.setState(state => ({ open: 1 }));
        break;
      case 1:
        this.setState(state => ({ open: 2 }));
        break;
      case 2:
        this.setState(state => ({ open: 3 }));

        break;
      default:
        this.setState(state => ({ open: 0 }));
        break;
    }
  };

  getImageName() {
    //console.log ("hey",this.state.open)
    var operador = "";
    switch (this.state.open) {
      case 0:
        operador = "plus";
        break;
      case 1:
        operador = "minus";
        break;
      case 2:
        operador = "mult";
        break;
      case 3:
        operador = "divi";
        break;
      default:
        return operador;
    }
    return operador;
  }

  render() {
    const imageName = this.getImageName();

    return (
      <div onClick={this.toggleImage} oper={this.props.oper}>
        {imagesPath[imageName]}
      </div>
    );
  }
}

export default TogOper;
