class Node {

    constructor(currIndex,forwardNode, subject, ammount) {
        this.currIndex = currIndex;
        this.forwardNode = forwardNode;
        this.subject = subject;
        this.ammount = ammount;
    }

 show = () =>{
 	return "subject: "+ this.subject + " ammount: " + this.ammount  

 }


}

export default Node