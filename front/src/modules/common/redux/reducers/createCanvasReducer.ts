import { ICanvasReducer } from "../interfaces";
import * as types from "../../../../utils/reduxConstants";

const CreateCommonReducer = (initialState: ICanvasReducer) => {
	const commonReducer = (state: ICanvasReducer = initialState, action: any) => {
		switch(action.type) {
			case types.SET_CANVAS_ACTION_TYPE: return {
				...state,
				canvasActionType: action.canvasActionType
			};
			default: return state;
		}
	}
	return commonReducer;
}

export default CreateCommonReducer;