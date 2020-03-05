import { ILanguageService } from "./interfaces";
import { GetStore } from "../redux/store";
import * as types from "../../../utils/reduxConstants";

class LanguageService implements ILanguageService {
	changeLanguage(language: string): void {
		GetStore().dispatch({
			type: types.CHANGE_LANGUAGE,
			language
		})
	}
}

export default LanguageService;