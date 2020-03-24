import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
/** @description For tsyringe library. */
import "reflect-metadata";
import { BrowserRouter as Router } from "react-router-dom";
import './index.scss';
import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';
import initModules from "./initialize/modules";

import App from './App';
import Splash from "./assets/ui/splash/splash";

/**
 * @description Initialize modules and redux store.
*/
initModules();

ReactDOM.render(
	<Router>
		<Suspense fallback={<Splash />}>
			<App />
		</Suspense>
	</Router>
	, document.getElementById('root'));

serviceWorker.unregister();
