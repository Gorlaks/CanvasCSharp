import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import "reflect-metadata";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import './index.scss';
import 'antd/dist/antd.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import initStore from "./initialize/store";
import initModules from "./initialize/modules";

import Splash from "./assets/ui/splash/splash";

initModules();
const store = initStore();

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Suspense fallback={<Splash />}>
				<App />
			</Suspense>
		</Router>
	</Provider>
	, document.getElementById('root'));

serviceWorker.unregister();
