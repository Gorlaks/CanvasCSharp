export interface IParams {
	ownerId?: string | null,
	login?: string | null;
	password?: string | null;
	canvasId?: string | null;
	type?: string | null;
	title?: string | null;
	data?: Array<Record<string, any>> | null;
}

export interface IApiClient {
	sendRequest(params: IParams, path: string): Promise<any>;
}