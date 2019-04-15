import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import StructureComponent from "./StructureComponent"

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StructureComponent />, div);
  ReactDOM.unmountComponentAtNode(div);




});


