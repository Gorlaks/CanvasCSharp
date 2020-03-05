import { ICommonReducer } from "../interfaces";
import * as types from "../../../../utils/reduxConstants";

const CreateCommonReducer = (initialState: ICommonReducer) => {
	const commonReducer = (state: ICommonReducer = initialState, action: any) => {
		switch(action.type) {
			case types.REDUX_STORE_TEST: return {
				...state,
				test: action.isPassed
			};
			default: return state;
		}
	}
	return commonReducer;
}

export default CreateCommonReducer;