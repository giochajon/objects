import linked from "./LinkedList.js";
import	Node from "./Node.js"

test("testing Linked List  class & methods: ", () => {

// creation of the linked list with first element
const a = new Node("Gio",10);
const obj= new  linked(a);
expect(obj.current.subject).toBe("Gio");
expect(obj.current.ammount).toBe(10);


// inserting second chacking number of nodes and totals
const b = new Node ("Alex",20);
obj.insertNode(b);
expect(obj.current.subject).toBe("Alex");
expect(obj.current.ammount).toBe(20);
expect(obj.current.previousNode.subject).toBe("Gio");
expect(obj.current.previousNode.ammount).toBe(10);
expect (obj.numberOfNodes).toBe(2);
expect (obj.totalAmmount).toBe(30);
const c = new Node ("Mike",5);
obj.insertNode(c);
expect (obj.numberOfNodes).toBe(3);
expect (obj.totalAmmount).toBe(35);
expect(obj.current.subject).toBe("Mike");
const d = new Node ("John",2);
obj.insertNode(d);
// testing inserting at the beginning 
const e = new Node ("Peter",1);
obj.insertNodeBeginning(e)
expect(obj.first.subject).toBe("Peter");
expect(obj.last.subject).toBe("John");
obj.moveFirst();
obj.moveNext();
expect(obj.current.subject).toBe("Gio");
expect(obj.first.subject).toBe("Peter");
expect(obj.current.forwardNode.subject).toBe("Alex");
expect(obj.current.previousNode.subject).toBe("Peter");
const dsp= obj.current.show()
expect(dsp).toBe("subject: Gio ammount: 10");

// moving to the end and inserting
obj.moveLast()
expect(obj.current.subject).toBe("John");
const f = new Node ("Frank",10);
obj.insertNode(f)
expect(obj.last.subject).toBe("Frank");
expect(obj.current.previousNode.subject).toBe("John");
expect (obj.numberOfNodes).toBe(6);
expect (obj.totalAmmount).toBe(48);

// moving to the one before the last and deleting it
obj.moveLast()

obj.movePrev()
//console.log("the current one is John and it is to be deleted")
expect(obj.current.subject).toBe("John");
expect(obj.current.previousNode.subject).toBe("Mike");
obj.deleteNode()
expect(obj.current.subject).toBe("Mike");
//console.log("Mike substitued John and the next/last is Frank")
expect(obj.current.forwardNode.subject).toBe("Frank");
expect(obj.last.subject).toBe("Frank");
expect(obj.current.previousNode.subject).toBe("Alex");
expect (obj.numberOfNodes).toBe(5);
expect (obj.totalAmmount).toBe(46);


});
