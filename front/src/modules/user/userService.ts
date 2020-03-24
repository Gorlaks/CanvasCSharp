import userStatesStorage from "../../initialize/statesStorages/userStatesStorage";
import { IUserService, IUserRepository } from "./interfaces";

class UserService implements IUserService {
	private userRepository: IUserRepository;

	constructor(userRepository: IUserRepository) {
		this.userRepository = userRepository;
	}

	/** @description Write received canvas list to redux store. */
	async setCanvasList(ownerId: string) {
		const canvasList = await this.userRepository.getCanvasList(ownerId);
		userStatesStorage.setState("canvasList", canvasList)

		return canvasList;
	}
}

export default UserService;