export interface ICommonReducer {
	language: string;
}

export interface IUserReducer {
	userAuthData: IUserAuthData;
	canvasList: Array<ICanvasList>;
}

export interface IReduxStore {
	commonReducer: ICommonReducer;
	userReducer: IUserReducer;
}

export interface IUserAuthData {
	id: string,
	login: string,
	email: string
}

export interface ICanvasList {
	id: string;
	ownerId: string;
	title: string;
	date: string;
	type: string;
}
