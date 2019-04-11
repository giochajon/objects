import React from "react";
import Account from "./Account";
import AccountController from "./AccountController"

class AccountInterface extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newAccountName: null,
            newAccountBalance: null,
            clicks: 0
        };
        this.controller = new AccountController()

    }


    addNewAccount = () => {
        let newAcc = new Account(this.state.newAccountName, this.state.newAccountBalance)
        this.controller.addAccount(newAcc)
        this.setState({ newAccountName: "" });
        this.setState({ newAccountBalance: "" });
        console.log(this.controller.accountList)
        //this.forceUpdate()


    }

    handleChangeName = (event) => {
        this.setState({ newAccountName: event.target.value });
    }

    handleChangeBalance = (event) => {
        this.setState({ newAccountBalance: event.target.value });
    }

    deleteAccount = (who) => {
        this.controller.deleteAccount(who)

        let a = this.state.clicks
        this.setState({ clicks: a + 1 });
        //alert (who +" "+ a)
    }

    renameAccount = (who) => {
        let newName = prompt("enter the new name the " + who + " account")
        this.controller.renameAccount(who, newName)

        let a = this.state.clicks
        this.setState({ clicks: a + 1 });
        //alert (who +" "+ a)
    }

    depositAccount = (who) => {
        let amount = prompt("enter the amount to deposit")
        const arr = this.controller.accountList;
          arr.forEach((element) => {if (element.name === who) {element.deposit(amount)}});
        this.controller.accountList = arr;
        this.controller.chkLowHigh();
        let a = this.state.clicks
        this.setState({ clicks: a + 1 });
    }

    withdrawAccount = (who) => {
        let amount = prompt("enter the amount to withdraw")
        const arr = this.controller.accountList;
          arr.forEach((element) => {if (element.name === who) {element.withdrawl(amount)}});
        this.controller.accountList = arr;
        this.controller.chkLowHigh();
        let a = this.state.clicks
        this.setState({ clicks: a + 1 });
    }



    showData = () => {
        let lista = [];

        const arr = this.controller.accountList;
        arr.forEach((element) => {
            lista.push(
                <div className="Acc">
                 <p>Name: {element.name}</p> <p> Balance:  {element.balance}</p>
         
              <button onClick={() => {
                        //this.props.funcMoveIn(this.props.name);
                       //alert('miau')
                       this.renameAccount(element.name)
                    }}
              >Rename Account</button>
              <button onClick={() => {
                        //this.props.funcMoveIn(this.props.name);
                       //alert('miau')
                       this.deleteAccount(element.name)
                    }}
              >Delete Account</button>

              <button onClick={() => {
                        //this.props.funcMoveIn(this.props.name);
                       //alert('miau')
                       this.depositAccount(element.name)
                    }}
              >Deposit in Account</button>

              <button onClick={() => {
                        //this.props.funcMoveIn(this.props.name);
                        this.withdrawAccount(element.name)
                    }}
              >withdraw in Account</button>


         </div>
            );
        });
        return lista
    }

    render() {

        let accountCount = this.controller.accountList.length


        return (
            <div>
          <p>Number of accounts: {accountCount}</p>
          <p>total: {this.controller.total}   highest: {this.controller.highest}   lowest: {this.controller.lowest} </p>
            
            <div className="Acc">
             <p>New Account: </p> 
              <input
                    type="text"
                    value={this.state.newAccountName}
                    onChange={this.handleChangeName}
                    placeholder="Name"
                /> 
                <input
                    type="number"
                    value={this.state.newAccountBalance}
                    onChange={this.handleChangeBalance}
                    placeholder="Inital Balance"
                />
              <button onClick={() => {
                        //this.props.funcMoveIn(this.props.name);
                       //alert('miau')
                       this.addNewAccount()
                    }}
              >Add Account</button>
            
            </div>
            {this.showData()}
           
            

            </div>
        );
    }
}

export default AccountInterface;