import React, { useEffect, useState } from 'react';
import { Switch, Route, useHistory } from "react-router-dom";
import { message } from "antd";

import commonStatesStorage from "./initialize/statesStorages/commonStatesStorage";
import localStorageApi from "./initialize/api/localStorageApi";
import { RoutePath } from "./utils/constants";

import Header from "./modules/header/component/header";
const Auth = React.lazy(() => import("./modules/auth/component/auth"));
const User = React.lazy(() => import("./modules/user/component/user"));
const Canvas = React.lazy(() => import("./modules/canvas/component/canvas"));
const Admin = React.lazy(() => import("./modules/admin/admin"));

/** @description Config antd message component. */
message.config({
  maxCount: 1
})

const App = () => {
  const history = useHistory();
  const userAuthData = localStorageApi.getLocalData("userAuthData", {});
  const language = localStorageApi.getLocalData("language", "");
  const isAuthorized = Boolean(userAuthData.id);

  const [languageState, setLanguageState] = useState(language);

  /** @description Register language state in the states storage. */
  commonStatesStorage.registState<string>("language", {
    state: languageState,
    setState: setLanguageState
  });

  /**
	 * @description Checks for language information in the localStorage
   * and check authorization of current user.
	*/
  useEffect(() => {
    if (!language) localStorageApi.setLocalData("language", "en");
    if (!isAuthorized) history.push("/auth");
  }, [])

  return (
    <>
      <Header />
      <Switch>
        <Route exact path={RoutePath.AUTH_PATH} component={Auth} />
        <Route exact path={RoutePath.USER_PATH} component={User} />
        <Route exact path={RoutePath.CANVAS_PATH} component={Canvas} />
      </Switch>
    </>
  );
}

export default App;