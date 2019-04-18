import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MathComp from "./MathComp"

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MathComp />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('testing Mathcomp Controller class & methods: ', () => {
    const obj = new MathComp()
    //console.log ("the obj", obj)
    expect(obj.firstime).toBe(1)
    expect(obj.counter).toBe(2)
    expect(obj.state.firstnum).toBe(1)
    expect(obj.state.secondnum).toBe(1)
    expect(obj.state.oper).toBe("subs")
    expect(obj.state.kk).toBe(1)


})
