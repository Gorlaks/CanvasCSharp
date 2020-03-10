import { GetStore } from "../common/redux/store";
import { IUserService, IUserRepository } from "./interfaces";
import * as types from "../../utils/reduxConstants";

class UserService implements IUserService {
	private userRepository: IUserRepository;

	constructor(userRepository: IUserRepository) {
		this.userRepository = userRepository;
	}

	async setCanvasList(userId: string) {
		const canvasList = await this.userRepository.getCanvasList(userId);
		GetStore().dispatch({
			type: types.SET_CANVAS_LIST,
			canvasList
		});
	}
}

export default UserService;