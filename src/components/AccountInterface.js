import React from "react";
import Account from "./Account"

class AccountInterface extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            accountName: this.props.initialName,
            accountBalance: Number(this.props.initialBalance),
            editingName: false
        };
        this.cuenta = new Account(this.state.accountName, this.state.accountBalance)
        this.editingName = false
        this.namCaption = <div>{this.state.accountName}</div>
        //  this.handleDeposit = this.handleDeposit.bind(this);
    }
    /*    componentDidMount() {
            
        }
    */

    handleDeposit = event => {
        this.cuenta.deposit(Number(prompt("enter the amount to deposit on "+this.state.accountName )))
        this.setState({ accountBalance: this.cuenta.showBalance() });
    };

    handleWithdrawl = event => {

        this.cuenta.withdrawl((Number(prompt("enter the amount to withdrawon " +this.state.accountName))))
        this.setState({ accountBalance: this.cuenta.showBalance() });
    };

    handleChangeName = event => {
        this.setState({ accountName: event.target.value });
        this.cuenta.renameAccount(this.state.accountName)
    };

    handleDelete = event => {
        this.pop()
    };

    editName = event => {
        this.setState({ editingName: !this.state.editingName });
    }

    render() {

        const tog = this.state.editingName
        let MyVar = ""

        if (tog === true) {

            this.namCaption = <input type="text" value={this.state.accountname} onChange={this.handleChangeName}/>

            MyVar = "Done Renaming"
        } else {

            this.namCaption = <p>{this.state.accountName}</p>
            MyVar = "Rename"
        }

        return (
            <div className="Acc">
                   {this.namCaption}  <hr /><p>Balance: {this.state.accountBalance}</p>
                    <button onClick={this.handleDeposit}>deposit</button> 
                    <button onClick={this.handleWithdrawl}>withdrawal</button> 
                    <button onClick={this.editName}>{MyVar}</button>
                    <button onClick= {()=>{this.props.funcDelete(this.props.item)}} >delete</button>
                    </div>
        )
    }
}

export default AccountInterface;