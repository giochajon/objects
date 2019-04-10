import AccountController from "./AccountController";
import Account from "./Account"

test('testing account Controller class & methods: ', () => {
    let x = new AccountController();
	let a = new Account("Gio",10);    
    x.addAccount(a);
    // first account added
    expect(x.accountList[0].name).toBe("Gio")
    // second acount added to fulfill multi-accounts
    const b = new Account("Mike",30);
    x.addAccount(b);
    expect(x.total).toBe(40); // 10 of gio + 30 of Mike 
    // add a new account  in the middle to test highest and lowest
	const c = new Account("Joe",20);    
	x.addAccount(c);
	expect(x.total).toBe(60);
	expect(x.highest).toBe(30);
	expect(x.lowest).toBe(10);
	expect(x.accountList.length).toBe(3);
	//test deleting account mike
	x.deleteAccount("Mike")
	expect(x.accountList.length).toBe(2);
	//rename an account Gio to Giovanni
	x.renameAccount("Gio","Giovanni")	
	expect(x.accountList[0].name).toBe("Giovanni")
	
	//taking 5 from gio to check te totals and lowest
	x.accountList[0].withdrawl(5)
	x.chkLowHigh()
	expect(x.total).toBe(25);
	expect(x.highest).toBe(20);
	expect(x.lowest).toBe(5);
})