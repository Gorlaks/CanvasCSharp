export interface IParams {
	login?: string;
	password?: string;
}

export interface IApiClient {
	sendRequest(params: IParams, path: string): Promise<any>;
}