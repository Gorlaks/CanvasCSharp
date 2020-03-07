import React, { useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import { message } from "antd";

import { RoutePath } from "./utils/constants";

import Header from "./modules/header/header";
import Auth from "./modules/auth/component/auth";
import User from "./modules/user/component/user";

message.config({
  maxCount: 1
})

function App() {

  useEffect(() => {
    console.log("TODO login check")
  }, [])

  return (
    <>
      <Header />
      <Switch>
        <Route path={RoutePath.AUTH_PATH} component={Auth} />
        <Route path={RoutePath.USER_PATH} component={User} />
      </Switch>
    </>
  );
}

export default App;
