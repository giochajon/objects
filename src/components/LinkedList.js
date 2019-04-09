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



    insertNode = (NewNode) => {
        this.current = this.last
        NewNode.previousNode = this.current
        this.current.forwardNode = NewNode
        this.last = NewNode
        this.current = NewNode
        this.numberOfNodes++
        this.totalAmmount += Number(NewNode.ammount)
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
        this.current = this.current.forwardNode

    }

    movePrev = () => {
        this.current = this.current.previousNode

    }



    deleteNode = () => {
    	this.totalAmmount -= this.current.ammount;
    	this.numberOfNodes--;
        this.current.previousNode.forwardNode = this.current.forwardNode
        this.current.forwardNode.previousNode = this.current.previousNode
        this.movePrev()
    }

}


export default LinkedList