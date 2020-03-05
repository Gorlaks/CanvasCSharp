import React from "react";
import Login from "./fragments/login";

const Auth = () => {
	return (
		<div className="auth">
			<div className="auth__form">
				<div className="auth__switcher">

				</div>
				<Login />
			</div>
		</div>
	);
};

export default Auth;