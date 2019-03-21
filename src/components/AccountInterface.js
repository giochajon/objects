import React from "react";
import Account from "./Account"

class AccountInterface extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            accountName: this.props.initialName,
            accountBalance: Number(this.props.initialBalance),
        };
        this.cuenta = new Account(this.state.accountName, this.state.accountBalance)
      //  this.handleDeposit = this.handleDeposit.bind(this);
    }
    handleDeposit = event => {
        this.cuenta.deposit(Number(prompt("enter the amount to deposit")))
        this.setState({ accountBalance: this.cuenta.showBalance() });
    };

    handleWithdrawl = event => {

        this.cuenta.withdrawl((Number(prompt("enter the amount to withdraw"))))
        this.setState({ accountBalance: this.cuenta.showBalance() });
    };


    render() {
        return (
            <div className="Acc">
                	<p>{this.state.accountName} Balance: {this.state.accountBalance}</p>
                	<button onClick={this.handleDeposit}>deposit</button> 
                	<button onClick={this.handleWithdrawl}>withdrawl</button> 
                	</div>
        )
    }
}

export default AccountInterface;