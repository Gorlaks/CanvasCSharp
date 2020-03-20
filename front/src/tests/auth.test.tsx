import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import "reflect-metadata";

import Login from '../modules/auth/component/fragments/login';
import Registration from '../modules/auth/component/fragments/registration';

import initModules from "../initialize/modules";
import initStore from "../initialize/store";

initModules();
initStore();

describe("Tests: auth page", () => {
  it("Test: login component", () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <Login language="en" />
      </Router>,
      div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Test: Registration component", () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <Registration language="en" />
      </Router>,
      div);
    ReactDOM.unmountComponentAtNode(div);
  });
});