import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MyMenu from "./MyMenu"

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MyMenu />, div);
  ReactDOM.unmountComponentAtNode(div);
});
