import React, { useEffect } from 'react';
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { message } from "antd";
import { container } from "tsyringe";

import { RoutePath } from "./utils/constants";
import { ILocalStorageApi } from "./modules/common/storage/interfaces"

import Header from "./modules/header/header";
import Auth from "./modules/auth/component/auth";
import User from "./modules/user/component/user";
import Canvas from "./modules/canvas/component/canvas";

message.config({
  maxCount: 1
})

function App() {
  const history = useHistory();
  const localStorageApi: ILocalStorageApi = container.resolve("localStorageApi");

  useEffect(() => {
    const userAuthData = localStorageApi.getLocalData("userAuthData", {});
    const isAuthorized = Boolean(userAuthData.id);
    if(!isAuthorized) history.push("/auth");
  }, [])

  return (
    <>
      <Header />
      <Switch>
        <Route path={RoutePath.AUTH_PATH} component={Auth} />
        <Route path={RoutePath.USER_PATH} component={User} />
        <Route path={RoutePath.CANVAS_PATH} component={Canvas} />
      </Switch>
    </>
  );
}

export default App;