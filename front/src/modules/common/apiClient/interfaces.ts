export interface IParams {
	login?: string;
	password?: string;
	userId?: string;
	canvasId?: string;
}

export interface IApiClient {
	sendRequest(params: IParams, path: string): Promise<any>;
}