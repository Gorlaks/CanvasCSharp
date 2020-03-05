export interface ILocalStorageApi {
	getLocalData(key: string, defaultValue: string): JSON;
	setLocalData(key: string, value: any): void;
}