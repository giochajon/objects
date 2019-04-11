import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AccountInterfaceOld from "./AccountInterfaceOld"

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AccountInterfaceOld />, div);
  ReactDOM.unmountComponentAtNode(div);
});
