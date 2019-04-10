//import Account from "./Account"

class AccountController {

    constructor() {
        this.accountList = []
        this.total = 0;
        this.highest = 0;
        this.lowest = 0; 

    }

chkLowHigh = () => {
 let accum = 0;
 this.highest = 0;
 this.lowest = 999999999999;
this.accountList.forEach ((element) => {
          if (this.highest < element.balance) {this.highest = element.balance};  
        if (this.lowest > element.balance) {this.lowest = element.balance}; 
         accum += element.balance   
            
        });
this.total = accum;
//console.log ("total", this.total,  "highest now", this.highest, "lowest now", this.lowest )

    }


    addAccount  = (account) => {
        this.accountList.push (account);
        
        this.chkLowHigh();
        
    }

    deleteAccount (whichName) {
      let a = this.accountList.filter(function(item) {
  return item.name !== whichName;
}); 
      this.accountList = a;
      this.chkLowHigh();
    }

    renameAccount(whichName,newName) {
        this.accountList.forEach ((element) => {
          
    if (element.name === whichName) {element.name = newName}        
            
        });

    }

}    
export default AccountController