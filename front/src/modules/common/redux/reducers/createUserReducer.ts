import { IUserReducer } from "../interfaces";
import * as types from "../../../../utils/reduxConstants";

const CreateUserReducer = (initialState: IUserReducer) => {
	const userReducer = (state: IUserReducer = initialState, action: any) => {
		switch(action.type) {
			case types.SET_USER_AUTH_DATA: return {
				...state,
				userAuthData: action.userAuthData
			};
			case types.SET_CANVAS_LIST: return {
				...state,
				canvasList: action.canvasList
			};
			default: return state;
		}
	}
	return userReducer;
}

export default CreateUserReducer;