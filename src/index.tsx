import React from 'react';
import ReactDOM from 'react-dom';
import "reflect-metadata";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import initStore from "./initialize/store";
import initModules from "./initialize/modules";

initModules();
const store = initStore();

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>
	, document.getElementById('root'));

serviceWorker.unregister();
