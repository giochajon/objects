

console.log('hello');

class Account {

    constructor(accountName, startingBalance) {
        this.name = accountName;
        this.balance = parseInt(startingBalance);
    }

    deposit = (amount) => {
        this.balance = this.balance + parseInt(amount)
    }

    withdrawl(amount) {
        this.balance = this.balance - parseInt(amount)
    }

    showBalance() {
        return (this.balance)
    }




}



class AccountControllerP {

    constructor() {
        this.accountList = []
        this.total = 0;
        this.highest = 0;
        this.lowest = 999999999999; 

    }

chkLowHigh() {
 let accum = 0;
this.accountList.forEach ((element) => {
          if (this.highest < element.balance) {this.highest = element.balance};  
        if (this.lowest > element.balance) {this.lowest = element.balance}; 
         accum += element.balance   
            
        });
this.total = accum;
console.log ("total", this.total,  "highest now", this.highest, "lowest now", this.lowest )

    }


    addAccount  = (account) => {
        this.accountList.push (account);
        
        this.chkLowHigh();
        
    }

    deleteAccount (whichName) {
      a = this.accountList.filter(function(item) {
  return item.name !== whichName;
}); 
      this.accountList = a;
      this.chkLowHigh();
    }

    renameAccount(whichName,newName) {
        this.accountList.forEach ((element) => {
          
    if (element.name == whichName) {element.name = newName}        
            
        });

    }

}    

a = new Account("Gio",10);
x = new AccountControllerP();
x.addAccount(a);
b = new Account("Mike",30);
x. addAccount(b);
c = new Account("Joe",20);
x.addAccount(c);
x.deleteAccount("Mike")
x.renameAccount("Gio","Giovanni")
x.chkLowHigh
