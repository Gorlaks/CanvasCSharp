export interface IParams {
	ownerId?: string,
	login?: string;
	password?: string;
	canvasId?: string;
	type?: string;
	title?: string;
	data?: Array<Record<string, any>>;
}

export interface IApiClient {
	sendRequest(params: IParams, path: string): Promise<any>;
}