import { container } from "tsyringe";

import LocalStorageApi from "../modules/common/storage/localStorageApi";

const initModules = (): void => {
	const localStorageApi = new LocalStorageApi();

	container.register("localStorageApi", { useValue: localStorageApi });
}

export default initModules;