/**
 * @desc Url path of server for apiClient.
*/
export const url: string = "https://localhost:5001";

/**
 * @desc Route paths for routing.
 * @readonly
 * @type {string}
*/
export enum RoutePath {
	ROOT_PATH = "/",
	AUTH_PATH = "/auth",
	USER_PATH = "/user",
	CANVAS_PATH = "/canvas"
};