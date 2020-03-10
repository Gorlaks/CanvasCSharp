import { ICanvasData } from "../common/redux/interfaces";

export interface ICanvasRepository {
	getCanvasById(userId: string, id: string): Promise<ICanvasData>;
}

export interface ICanvasService {
		deleteCanvas(userId: string, canvasId: string): Promise<any>;
		createCanvas(userId: string, title: string, type: string): Promise<any>;
		setCanvasListAfterRemove(canvasId: string): void;
}