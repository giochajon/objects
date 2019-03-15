class Account {

	constructor(accountName, startingBalance){
		this.name = accountName;
		this.balance = parseInt(startingBalance);
		}
	
	deposit = (amount) => {
		this.balance = this.balance + parseInt(amount)
	}

	withdrawl (amount) {
		this.balance = this.balance - parseInt(amount)
	}

	showBalance(){
		return(this.balance)
	}
	// remder (){
	// 	return (
	// 	)
	// }

}

export default Account