import { ILanguageService } from "./interfaces";
import { ILocalStorageApi } from "../storage/interfaces";
import { GetStore } from "../redux/store";
import * as types from "../../../utils/reduxConstants";

class LanguageService implements ILanguageService {
	private localStorageApi: ILocalStorageApi;

  constructor(localStorageApi: ILocalStorageApi) {
    this.localStorageApi = localStorageApi;
  }

	/** @description Write language to redux store and local storage. */
	changeLanguage(language: string): void {
		GetStore().dispatch({
			type: types.CHANGE_LANGUAGE,
			language
		});
		this.localStorageApi.setLocalData("language", language);
	}
}

export default LanguageService;