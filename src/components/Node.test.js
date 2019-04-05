import node from "./Node.js";

test("testing Node class & methods: ", () => {

const obj= new node(5898852,1114400,"Test Subject",123456);
expect(obj.currIndex).toBe(5898852);
expect(obj.subject).toBe("Test Subject");
expect(obj.forwardNode).toBe(1114400);
expect(obj.ammount).toBe(123456);

const dsp= obj.show()
expect(dsp).toBe("subject: Test Subject ammount: 123456");

});
