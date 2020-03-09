import { ICanvasData } from "../common/redux/interfaces";

export interface ICanvasRepository {
	getCanvasById(userId: string, id: string): Promise<ICanvasData>;
}

export interface ICanvasService {
    
}