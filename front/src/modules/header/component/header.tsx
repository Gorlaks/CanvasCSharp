/** @module Header */
import React from "react";
import { UserOutlined } from "@ant-design/icons";

import languageService from "../../../initialize/services/languageService";
import localStorageApi from "../../../initialize/api/localStorageApi";

import Menu from "./fragments/menu";

const Header = () => {
	const login = localStorageApi.getLocalData("userAuthData", {}).login;

	return (
		<div className="header">
			<div className="header__languages">
				<button onClick={() => languageService.changeLanguage("ru")}>ru</button>
				<button onClick={() => languageService.changeLanguage("en")}>en</button>
			</div>
			<div className="header__user">
				{login && <div className="header__user-wrapper">
					<div className="header__user-logo"><UserOutlined /></div>
					<Menu login={login}/>
				</div>}
			</div>
		</div>
	);
};

export default Header;