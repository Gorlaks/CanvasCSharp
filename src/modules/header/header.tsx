import React from "react";
import { container } from "tsyringe";

import { ILanguageService } from "../common/language/interfaces";

const Header = () => {
	const languageService: ILanguageService = container.resolve("languageService");
	return (
		<div className="header">
			<button onClick={() => languageService.changeLanguage("ru")}>ru</button>
			<button onClick={() => languageService.changeLanguage("en")}>en</button>
		</div>
	);
};

export default Header;