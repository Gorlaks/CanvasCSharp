export interface ILocalStorageApi {
	getLocalData(key: string, defaultValue: any): any;
	setLocalData(key: string, value: any): void;
	clearLocalData(): void;
}