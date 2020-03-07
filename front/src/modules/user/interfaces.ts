import { ICanvasList } from "../common/redux/interfaces";

export interface IUserRepository {
	getCanvasList(userId: string): Promise<ICanvasList>;
}

export interface IUserService {
	setCanvasList(userId: string): void;
}