import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { container } from "tsyringe";
import { message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { LS } from "../../../../utils/helpers";

import { IAuthService } from "../../interfaces";

const Login = (props: {
	language: string
}) => {
	const history = useHistory();
	const authService: IAuthService = container.resolve("authService");

	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");

	/**
	 * @description Make a request to the server for login
	 * and put received information to redux store.
	 * @event onClick.
	*/
	const sendLogin = () => {
		if(login && password) {
			const loading = message.loading(LS("Loading"));
			authService.login(login, password)
			.then(() => history.push("/user"))
			.catch(() => message.error(LS("Something_went_wrong")))
			.finally(() => loading());
		} else message.error(LS("Empty_field_error"));
	}

	return (
		<div>
			<div className="auth__filed">
				<div className="auth__icon"><UserOutlined /></div>
				<input type="text" placeholder={LS("Login")} onChange={(e: any) => setLogin(e.target.value)} />
			</div>
			<div className="auth__filed">
				<div className="auth__icon"><LockOutlined /></div>
				<input type="password" placeholder={LS("Password")} onChange={(e: any) => setPassword(e.target.value)} />
			</div>
			<button className="auth__btn" onClick={() => sendLogin()}>{LS("Login_button")}</button>
		</div>
	);
};

export default Login;