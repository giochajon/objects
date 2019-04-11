import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TogOper from "./TogOper"

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TogOper />, div);
  ReactDOM.unmountComponentAtNode(div);
});
