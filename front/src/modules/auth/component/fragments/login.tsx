import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { container } from "tsyringe";
import { connect } from "react-redux";
import { message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { LS } from "../../../../utils/helpers";

import { IAuthService } from "../../interfaces";
import { IReduxStore } from "../../../common/redux/interfaces";

const Login = (props: {
	language?: string
}) => {
	const history = useHistory();
	const authService: IAuthService = container.resolve("authService");

	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");

	const sendLogin = () => {
		const loading = message.loading(LS("Loading"));
		authService.login(login, password)
		.then(() => history.push("/user"))
		.catch((err: string) => message.error(err))
		.finally(() => loading());
	}

	return (
		<div className="login">
			<div className="login__filed">
				<div className="login__icon"><UserOutlined /></div>
				<input type="text" placeholder={LS("Login")} onChange={(e: any) => setLogin(e.target.value)} />
			</div>
			<div className="login__filed">
				<div className="login__icon"><LockOutlined /></div>
				<input type="password" placeholder={LS("Password")} onChange={(e: any) => setPassword(e.target.value)} />
			</div>
			<button className="login__btn" onClick={() => sendLogin()}>{LS("Login_button")}</button>
		</div>
	);
};

const mapStateToProps = (state: IReduxStore) => {
	return {
		language: state.commonReducer.language
	}
}

export default connect(mapStateToProps, null)(Login);