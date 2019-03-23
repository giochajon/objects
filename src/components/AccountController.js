import React from "react";
import AccountInterface from "./AccountInterface";
import myData from "./AccountList.json";

class AccountController extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            arrayData: myData,
        };
    }

    showData = () => {
        let lista = [];

        const arr = this.state.arrayData;
        arr.forEach((element) => {
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

    handleDelete = (element) => {
        let arr = this.state.arrayData
        let result = arr.filter(arr => arr !== element)
        this.setState({ arrayData: result })
    };


    handleNewAccount = event => {
        let nuevo = {
            name: prompt("enter name for the account"),
            balance: Number(prompt("enter Initial Balance on new account"))
        }
        let arr = this.state.arrayData
        arr.unshift(nuevo)
        this.setState({ arrayData: arr })
    }

    accountStatusBar() {
        let myArray = this.state.arrayData;
        let higher = 0;
        let lower = Number(myArray[0].balance);
        let total = 0;
        //let valComp = 0;
        myArray.forEach(function(element) {
            total += Number(element.balance);
            //valComp = Number(element.balance)
            higher = (higher > Number(element.balance)) ? higher : Number(element.balance)
            lower = (lower < Number(element.balance)) ? lower : Number(element.balance)
        });
        return "Higher: " + higher + " Lower " + lower + " Total  " + total;
    }

    render() {
        return (
            <div>
				<div>
					<h3>Account Controller</h3>
					{this.accountStatusBar()}
					<br />
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