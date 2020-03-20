import { ICanvasReducer } from "../interfaces";

/** @description Reducer with data of canvas component. */
const CreateCanvasReducer = (initialState: ICanvasReducer) => {
	const canvasReducer = (state: ICanvasReducer = initialState, action: any) => {
		switch(action.type) {
			default: return state;
		}
	}
	return canvasReducer;
}

export default CreateCanvasReducer;