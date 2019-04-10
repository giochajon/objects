import React from "react";
import Account from "./Account";
import AccountController from "./AccountController"

class AccountInterface extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
           
        };
        this.controller = new AccountController()
    }

    render() {
        

        return (
            <div className="Acc">
                
            </div>
        );
    }
}

export default AccountInterface;
