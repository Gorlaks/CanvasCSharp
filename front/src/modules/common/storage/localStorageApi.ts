import { ILocalStorageApi } from "./interfaces";

class LocalStorageApi implements ILocalStorageApi {
	getLocalData(key: string, defaultValue: string) {
		const value: string = localStorage.getItem(key) || defaultValue;
		try {
			return JSON.parse(value);
		} catch {
			return value;
		}
	};

	setLocalData(key: string, value: any) {
		localStorage.setItem(key, JSON.stringify(value));
	};
}

export default LocalStorageApi;