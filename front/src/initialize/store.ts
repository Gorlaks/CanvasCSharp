/** @description Creating redux store */
import { container } from "tsyringe";

import { CreateStore } from "../modules/common/redux/store";
import { ILocalStorageApi } from "../modules/common/storage/interfaces";
import { ICommonReducer, IUserReducer, ICanvasReducer } from "../modules/common/redux/interfaces";
import CreateCommonReducer from "../modules/common/redux/reducers/createCommonReducer";
import CreateUserReducer from "../modules/common/redux/reducers/createUserReducer";
import CreateCanvasReducer from "../modules/common/redux/reducers/createCanvasReducer";


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

	const canvasReducerInitialState: ICanvasReducer = {}

	const store = CreateStore({
		commonReducer: CreateCommonReducer(commonReducerInitialState),
		userReducer: CreateUserReducer(userReducerInitialState),
		canvasReducer: CreateCanvasReducer(canvasReducerInitialState)
	})
	return store;
}

export default initStore;