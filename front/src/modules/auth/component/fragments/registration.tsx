import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { container } from "tsyringe";
import { message } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { LS } from "../../../../utils/helpers";

import { IAuthService } from "../../interfaces";


const Registration = (props: {
  language: string
}) => {
  const history = useHistory();
	const authService: IAuthService = container.resolve("authService");

  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const sendRegistration = () => {
		const loading = message.loading(LS("Loading"));
		authService.registration({ email, login, password })
		.then(() => history.push("/user"))
		.catch(() => message.error(LS("Something_went_wrong")))
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