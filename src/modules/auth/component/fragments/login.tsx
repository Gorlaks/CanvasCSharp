import React, { useState } from "react";
import { container } from "tsyringe";
import { connect } from "react-redux";
import { LS } from "../../../../utils/helpers";

import { IAuthService } from "../../interfaces";
import { IReduxStore } from "../../../common/redux/interfaces";

const Login = (props: {
	language?: string
}) => {
	const authService: IAuthService = container.resolve("authService");

	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className="login">
			<input type="text" placeholder={LS("Login")} onChange={(e: any) => setLogin(e.target.value)} />
			<input type="text" placeholder={LS("Password")} onChange={(e: any) => setPassword(e.target.value)} />
			<button onClick={() => authService.login(login, password)}>{ LS("Login_button") }</button>
		</div>
	);
};

const mapStateToProps = (state: IReduxStore) => {
	return {
		language: state.commonReducer.language
	}
}

export default connect(mapStateToProps, null)(Login);