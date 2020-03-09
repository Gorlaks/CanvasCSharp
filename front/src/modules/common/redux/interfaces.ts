export interface ICommonReducer {
	language: string;
}

export interface IUserReducer {
	userAuthData: IUserAuthData;
	canvasList: Array<ICanvasList>;
}

export interface ICanvasReducer {}

export interface IReduxStore {
	commonReducer: ICommonReducer;
	userReducer: IUserReducer;
	canvasReducer: ICanvasReducer;
}

export interface IUserAuthData {
	id: string;
	login: string;
	email: string;
}

export interface ICanvasList {
	id: string;
	ownerId: string;
	title: string;
	date: string;
	type: string;
}

export interface ICanvasData {
	id: string
	title: string;
	type: string;
	columns: number;
	rows: number;
	data: Array<Record<string, any>>;
}