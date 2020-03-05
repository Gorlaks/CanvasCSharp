import React, { useEffect } from 'react';
import { Switch, Route } from "react-router-dom";

import { routePaths } from "./utils/constants";

import Header from "./modules/header/header";
import Auth from "./modules/auth/component/auth";

function App() {

  useEffect(() => {
    console.log("TODO login check")
  }, [])

  return (
    <>
      <Header />
      <Switch>
        <Route path={routePaths.authPath} component={Auth} />
      </Switch>
    </>
  );
}

export default App;
