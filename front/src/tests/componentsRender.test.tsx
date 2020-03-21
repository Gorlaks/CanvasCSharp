import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import "reflect-metadata";

import Login from '../modules/auth/component/fragments/login';
import Registration from '../modules/auth/component/fragments/registration';
import User from "../modules/user/component/user";

import initModules from "../initialize/modules";
import initStore from "../initialize/store";

initModules();
const store = initStore();

describe("Tests: Auth page", () => {
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

describe("Tests: User page", () => {
  it("Test: User main component", () => {
    const language = "en";
    const userAuthData = {
      id: "0",
      login: "Gorlaks",
      email: "imgorlaks@gmail.com"
    };
    const canvasList = [{
      id: "0",
      ownerId: "0",
      title: "title",
      date: "20.03.2020",
      type: "Lean"
    }]

    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <Provider store={store}>
          <User language={language} userAuthData={userAuthData} canvasList={canvasList} />,
        </Provider>,
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  })
})