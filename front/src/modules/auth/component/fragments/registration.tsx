import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { container } from "tsyringe";
import { message } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { LS } from "../../../../utils/helpers";

import { IAuthService } from "../../interfaces";
import { RoutePath } from "../../../../utils/constants";


const Registration = (props: {
	language: string
}) => {
	const history = useHistory();
	const authService: IAuthService = container.resolve("authService");

	const [login, setLogin] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	/**
	 * @description Make a request to the server for registration
	 * and put received information to redux store.
	 * @event onClick.
	*/
	const sendRegistration = () => {
		const loading = message.loading(LS("Loading"));
		authService.registration({ email, login, password })
			.then((item: Record<string, string>) => {
				if (!item.error) history.push(RoutePath.USER_PATH);
				else message.error(LS(item.error));
			})
			.catch((e: ExceptionInformation) => message.error(LS(e.toString())))
			.finally(() => loading());
	}

	return (
		<div>
			<div className="auth__filed">
				<div className="auth__icon"><MailOutlined /></div>
				<input type="email" placeholder={LS("Email")} onChange={(e: any) => setEmail(e.target.value)} />
			</div>
			<div className="auth__filed">
				<div className="auth__icon"><UserOutlined /></div>
				<input type="text" placeholder={LS("Login")} onChange={(e: any) => setLogin(e.target.value)} />
			</div>
			<div className="auth__filed">
				<div className="auth__icon"><LockOutlined /></div>
				<input type="password" placeholder={LS("Password")} onChange={(e: any) => setPassword(e.target.value)} />
			</div>
			<button className="auth__btn" onClick={() => sendRegistration()}>{LS("Registration_button")}</button>
		</div>
	)
}

export default Registration;