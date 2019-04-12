import node from "./Node.js";

class LinkedList {

    constructor(node) {
        this.first = node;
        this.last = node;
        this.current = node;
        this.insertNode(node);
        this.numberOfNodes = 1;
        this.totalAmmount = Number(node.ammount)
    }

    toArray = () => {
        let lista = []
        let curr = this.current.subject
        if (this.first === this.last) {

        } else {
            this.moveFirst();
            for (let fun = 1; fun < this.numberOfNodes; fun++) {
                lista.push("Subject: " + this.current.subject + " Amount: " + this.current.ammount)
                this.moveNext()
            }
            lista.push("Subject: " + this.current.subject + " Amount: " + this.current.ammount)

        }
        this.moveFirst();
        for (let fun = 1; fun < this.numberOfNodes; fun++) {
            if (this.current.subject !== curr) {
                console.log("NO");
                this.moveNext()
            } else {
                console.log("yes");
                break;
            }
        }
        return lista
    }



    insertNode = (NewNode) => {
        /*this.current = this.last
        NewNode.previousNode = this.current
        this.current.forwardNode = NewNode
        this.last = NewNode
        this.current = NewNode
        this.numberOfNodes++
        this.totalAmmount += Number(NewNode.ammount)*/

        //this.current = this.last
        if (this.current === this.last) {
            this.current = this.last
            NewNode.previousNode = this.current
            this.current.forwardNode = NewNode
            this.last = NewNode
            this.current = NewNode
            this.numberOfNodes++
            this.totalAmmount += Number(NewNode.ammount)
        } else {

            NewNode.previousNode = this.current
            NewNode.forwardNode = this.current.forwardNode
            this.current.forwardNode = NewNode
            //this.current = NewNode
            this.numberOfNodes++
            this.totalAmmount += Number(NewNode.ammount)
        }

    }

    insertNodeBeginning = (NewNode) => {
        this.first.previousNode = NewNode;
        NewNode.forwardNode = this.first;
        this.first = NewNode;
        //this.current = NewNode;
        this.numberOfNodes++;
        this.totalAmmount += Number(NewNode.ammount);

    }

    moveFirst = () => {
        this.current = this.first

    }

    moveLast = () => {
        this.current = this.last

    }

    moveNext = () => {
        if (this.current !== this.last) { this.current = this.current.forwardNode }

    }

    movePrev = () => {
        if (this.current !== this.first) { this.current = this.current.previousNode }

    }



    deleteNode = () => {

        if (this.current === this.first) {
            this.totalAmmount -= this.current.ammount;
            this.numberOfNodes--;
            this.moveNext()
            this.first = this.current;
            this.current.previousNode = null

            console.log("mia", this.current.subject)
        } else if (this.current === this.last) {

            this.totalAmmount -= this.current.ammount;
            this.numberOfNodes--;
            this.current.previousNode.forwardNode = null
            //this.current.forwardNode.previousNode = this.current.previousNode
            this.movePrev()
            this.last = this.current;

        } else if ((this.current !== this.last) || (this.current !== this.first)) {
            this.totalAmmount -= this.current.ammount;
            this.numberOfNodes--;
            this.current.previousNode.forwardNode = this.current.forwardNode
            this.current.forwardNode.previousNode = this.current.previousNode
            this.movePrev()
        }

    }
}


export default LinkedList