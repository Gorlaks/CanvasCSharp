import { ICanvasList } from "../common/redux/interfaces";

export interface IUserRepository {
	getCanvasList(ownerId: string): Promise<ICanvasList>;
}

export interface IUserService {
	setCanvasList(ownerId: string): void;
}