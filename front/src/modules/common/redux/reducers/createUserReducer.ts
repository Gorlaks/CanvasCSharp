import { IUserReducer } from "../interfaces";
import * as types from "../../../../utils/reduxConstants";

/** @description Reducer with data of user component. */
const CreateUserReducer = (initialState: IUserReducer) => {
	const userReducer = (state: IUserReducer = initialState, action: any) => {
		switch(action.type) {
			case types.SET_USER_AUTH_DATA: return {
				...state,
				/** @description Data after login */
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