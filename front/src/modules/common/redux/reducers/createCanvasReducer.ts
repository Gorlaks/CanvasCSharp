import { ICanvasReducer } from "../interfaces";

const CreateCommonReducer = (initialState: ICanvasReducer) => {
	const commonReducer = (state: ICanvasReducer = initialState, action: any) => {
		switch(action.type) {
			default: return state;
		}
	}
	return commonReducer;
}

export default CreateCommonReducer;