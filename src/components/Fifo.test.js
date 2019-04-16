import Queue from "./Fifo.js"

test("testing FIFO / Queue class & methods: ", () => {


    let x = new Queue;
    x.addElement("one");
    expect(x.showElements()).toEqual(["one"]);
    x.addElement("two");
    expect(x.showElements()).toEqual(["one", "two"]);
    const a = x.serveElement();
    expect(a).toBe("one")
    expect(x.showElements()).toEqual(["two"]);
    const b = x.serveElement();
    expect(b).toBe("two")




});