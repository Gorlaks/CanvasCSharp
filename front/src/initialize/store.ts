import { container } from "tsyringe";

import { CreateStore } from "../modules/common/redux/store";
import { ILocalStorageApi } from "../modules/common/storage/interfaces";
import { ICommonReducer, IUserReducer } from "../modules/common/redux/interfaces";
import CreateCommonReducer from "../modules/common/redux/reducers/createCommonReducer";
import CreateUserReducer from "../modules/common/redux/reducers/createUserReducer";


const initStore = () => {
	const localStorageApi: ILocalStorageApi = container.resolve("localStorageApi");
	
	const userAuthData = localStorageApi.getLocalData("userAuthData", {});

	const commonReducerInitialState: ICommonReducer = {
		language: localStorageApi.getLocalData("language", "en").toString()
	}

	const userReducerInitialState: IUserReducer = {
		canvasList: [],
		userAuthData: {
			id: userAuthData.id,
			login: userAuthData.login,
			email: userAuthData.email
		},
	}

	const store = CreateStore({
		commonReducer: CreateCommonReducer(commonReducerInitialState),
		userReducer: CreateUserReducer(userReducerInitialState)
	})
	return store;
}

export default initStore;