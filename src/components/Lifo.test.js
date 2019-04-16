import Stack from "./Lifo.js"

test("testing LIFO / Stack class & methods: ", () => {


    let x = new Stack;
    x.addElement("one");
    expect(x.showElements()).toEqual(["one"]);
    x.addElement("two");
    expect(x.showElements()).toEqual(["one", "two"]);
    const a = x.serveElement();
    expect(a).toBe("two")
    expect(x.showElements()).toEqual(["one"]);
    const b = x.serveElement();
    expect(b).toBe("one")




});