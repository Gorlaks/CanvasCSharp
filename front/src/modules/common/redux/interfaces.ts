export interface ICommonReducer {
	language: string;
}

export interface IReduxStore {
	commonReducer: ICommonReducer;
}
