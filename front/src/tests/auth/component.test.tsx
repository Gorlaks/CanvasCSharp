import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import commonStatesStorage from '../../initialize/statesStorages/commonStatesStorage';
import Login from '../../modules/auth/component/fragments/login';
import Registration from '../../modules/auth/component/fragments/registration';

describe("Tests: Auth page", () => {
  commonStatesStorage.registState<string>("language", {
    state: "en",
    setState: () => {}
  });

  it("Test: Login component", () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <Login language="en" />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Test: Registration component", () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <Registration language="en" />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});