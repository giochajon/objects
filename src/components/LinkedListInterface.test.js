import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LinkedListInterface from "./LinkedListInterface"

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LinkedListInterface />, div);
  ReactDOM.unmountComponentAtNode(div);
});
