import node from "./Node.js";

test("testing Node class & methods: ", () => {

const obj= new node("Test Subject",123456);
expect(obj.subject).toBe("Test Subject");
expect(obj.ammount).toBe(123456);

const dsp= obj.show()
expect(dsp).toBe("subject: Test Subject ammount: 123456");

});
