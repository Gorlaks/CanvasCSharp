import React from "react";
import { container } from "tsyringe";
import { UserOutlined } from "@ant-design/icons";

import { ILanguageService } from "../../common/language/interfaces";
import { ILocalStorageApi } from "../../common/storage/interfaces";

import Menu from "./fragments/menu";

const Header = () => {
	const languageService: ILanguageService = container.resolve("languageService");
	const localStorageApi: ILocalStorageApi = container.resolve("localStorageApi");
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