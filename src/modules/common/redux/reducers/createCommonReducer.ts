import { ICommonReducer } from "../interfaces";
import * as types from "../../../../utils/reduxConstants";

const CreateCommonReducer = (initialState: ICommonReducer) => {
	const commonReducer = (state: ICommonReducer = initialState, action: any) => {
		switch(action.type) {
			case types.CHANGE_LANGUAGE: return {
				...state,
				language: action.language
			};
			default: return state;
		}
	}
	return commonReducer;
}

export default CreateCommonReducer;