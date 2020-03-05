import React, { useEffect } from 'react';
import { Switch, Route } from "react-router-dom";

import { routePaths } from "./utils/constants";

import Login from "./modules/login/component/login";

function App() {
  return (
    <>
      <Switch>
        <Route path={routePaths.loginPath} component={Login} />
      </Switch>
    </>
  );
}

export default App;
