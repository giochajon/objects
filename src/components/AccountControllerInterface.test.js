import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AccountController from "./AccountControllerInterface"

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AccountController />, div);
  ReactDOM.unmountComponentAtNode(div);
});
