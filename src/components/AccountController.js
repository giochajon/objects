import React from "react";
import AccountInterface from "./AccountInterface";
import myData from "./AccountList.json";

class AccountController extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			arrayData: myData,
			//formatedData: []
		};




	}

	showData = () => {
		let lista = [];
		
		const arr = this.state.arrayData;
		console.log (arr)
		 arr.forEach  ((element) =>{
			//console.log(element.name,element.balance);
			lista.push(
				<AccountInterface
					key = {element.name+element.balance}
					initialName={element.name}
					initialBalance={element.balance}
					item = {element}
					funcDelete = {this.handleDelete}
				/>
			);
		});

		return lista;
	}

	handleDelete = (element)  => {
		let arr = this.state.arrayData
		//let arr = this.state.formatedData
		console.log ('arr is',arr)
		console.log ('element is',element)
		 
		 console.log('formated data state ',this.state.formatedData)

		let result = arr.filter(arr => arr !==element)
		//console.log('formated data state after fil ',this.state.formatedData)
		console.log('formated data state after fil ',result )
		this.setState({arrayData:result})


	
	};


	handleNewAccount = event => {
	}

	accountStatusBar() {
		let myArray = this.state.arrayData;

		let higher = 0;
		let lower = Number(myArray[0].balance);
		let total = 0;
		let valComp = 0; 
	
		myArray.forEach(function(element) {
			total += Number(element.balance);
			 valComp = Number(element.balance)
			 higher = (higher > Number(element.balance)) ? higher :  Number(element.balance)
			lower = (lower < Number(element.balance)) ? lower : Number(element.balance)
		});
         
		return "Higher: " + higher + " Lower " + lower + " Total  " + total;
	}

	render() {
		//console.log (myData)
		return (
			<div>
				<div>
					<h3>Account Controller</h3>
					{this.accountStatusBar()}
					<button onClick={this.handleNewAccount}>
						Add new Account
					</button>
				</div>

				{this.showData()}
				
			</div>
		);
	}
}

export default AccountController;
