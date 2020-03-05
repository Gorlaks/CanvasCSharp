import { CreateStore } from "../modules/common/redux/store";
import CreateCommonReducer from "../modules/common/redux/reducers/createCommonReducer";
import { ICommonReducer } from "../modules/common/redux/interfaces";

const initStore = () => {
	const commonReducerInitialState: ICommonReducer = {
		test: false
	}

	const store = CreateStore({
		commonReducer: CreateCommonReducer(commonReducerInitialState)
	})
	return store;
}

export default initStore;