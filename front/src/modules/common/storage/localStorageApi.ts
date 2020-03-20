import { ILocalStorageApi } from "./interfaces";

class LocalStorageApi implements ILocalStorageApi {
	setLocalData(key: string, value: any) {
		localStorage.setItem(key, JSON.stringify(value));
	};
	
	getLocalData(key: string, defaultValue: any) {
		const value: string = localStorage.getItem(key) || defaultValue;
		try {
			return JSON.parse(value);
		} catch {
			return value;
		}
	};

	clearLocalData() {
		localStorage.clear();
	}
}

export default LocalStorageApi;