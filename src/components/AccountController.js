import React from "react";
import AccountInterface from "./AccountInterface"
import myData from './AccountList.json';


class AccountController extends React.Component {
    constructor(props) {
        super(props);
        this.InitialAccounts = myData
        this.state = {
            
        };
    }

    showData(){
     let lista =[]
     myData.forEach(function(element) {
    console.log(element.name,element.balance);
    lista.push (<AccountInterface initialName= {element.name} initialBalance={element.balance} />)
});

    return  lista	
    }

    handleNewAccount = event => {
        //TO DO
        alert ("meaw")
    };


		render() {
			console.log (myData)
        return (
            <div>
            <div>
            <h3>Account Controller</h3>
            <button onClick={this.handleNewAccount}>Add new Account</button>
            </div>

            {this.showData()}
            <AccountInterface initialName="Gio" initialBalance="100" />
            <AccountInterface initialName="Larry" initialBalance="20" />     
            </div>
        )
    }
}

export default AccountController;