class Node {

    constructor(subject, ammount) {
        //this.currIndex = currIndex;
        this.forwardNode = null;
        this.subject = subject;
        this.ammount = ammount;
        this.previuosNode = null;
    }

    show = () => {
        return "subject: " + this.subject + " ammount: " + this.ammount

    }


}

export default Node