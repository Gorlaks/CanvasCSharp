import { container } from "tsyringe";

import { CreateStore } from "../modules/common/redux/store";
import CreateCommonReducer from "../modules/common/redux/reducers/createCommonReducer";
import { ICommonReducer } from "../modules/common/redux/interfaces";

import { ILocalStorageApi } from "../modules/common/storage/interfaces";

const initStore = () => {
	const localStorageApi: ILocalStorageApi = container.resolve("localStorageApi");

	const commonReducerInitialState: ICommonReducer = {
		language: localStorageApi.getLocalData("language", "en").toString()
	}

	const store = CreateStore({
		commonReducer: CreateCommonReducer(commonReducerInitialState)
	})
	return store;
}

export default initStore;