import React from "react";
import math from "./math"
import TogOper from "./TogOper";

class MathComp extends React.Component {
	constructor() {
		super();
		this.firstime = 1;
		this.counter = 2;
		this.state = {
			firstnum: 1,
			secondnum: 1,
			oper: "subs",
			kk: 1
		};
	}

	handleChangeFirst = event => {
		this.setState({ firstnum: event.target.value });
	};

	handleChangeSecond = event => {
		this.setState({ secondnum: event.target.value });
	};

	changeoper = event => {
		this.firstime = 0;
		const a = Number(this.state.firstnum);
		const b = Number(this.state.secondnum);
		let c = 0;
		//console.log ("desde oper", this.refs.math.sum(1,2))
		switch (this.state.oper) {
			case "sum":
				//c = a + b;
				c = math.sum(a,b);
				this.setState({ oper: "subs" });
				break;
			case "subs":
				c = math.substract(a,b);
				this.setState({ oper: "multi" });
				break;
			case "multi":
				c = math.multiply(a,b);
				this.setState({ oper: "divi" });
				break;
			case "divi":
				c = math.divide(a,b);
				this.setState({ oper: "sum" });
				break;
			default:
				c = a + b;
				this.setState({ oper: "sum" });
				break;
		}
		this.counter = c;
		//console.log(this.state.oper);
		// this.setState({ oper: event.target.value });
		console.log (TogOper.oper)
	};

	calcTotal = event => {
		const a = Number(this.state.firstnum);
		const b = Number(this.state.secondnum);
		let c = 0;

		switch (this.state.oper) {
			case "sum":
				c = a / b;

				break;
			case "subs":
				c = a + b;

				break;
			case "multi":
				c = a - b;

				break;
			case "divi":
				c = a * b;

				break;
			default:
				c = a + b;

				break;
		}
		this.counter = c;
		//console.log(this.state.oper);
		this.setState({ kk: event.target.value });
	};

	render() {
		return (
			<div>
				<input
					type="text"
					value={this.state.firstnum}
					onChange={this.handleChangeFirst}
				/>
				<div value={this.state.oper} onClick={this.changeoper}>
					<TogOper />
				</div>
				<input
					type="text"
					value={this.state.secondnum}
					onChange={this.handleChangeSecond}
				/>
				<div onClick={this.calcTotal}>
					<i className="fas fa-equals" />
					<div>{this.counter}</div>
				</div>
			</div>
		);
	}
}

export default MathComp;
