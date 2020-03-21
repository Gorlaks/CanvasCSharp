import { ICanvasData } from "../common/redux/interfaces";

export interface ICanvasRepository {
	getCanvasById(ownerId: string, id: string): Promise<ICanvasData>;
}

export interface ICanvasService {
		deleteCanvas(ownerId: string, canvasId: string): Promise<any>;
		createCanvas(ownerId: string, title: string, type: string): Promise<any>;
		setCanvasListAfterRemoving(canvasId: string): void;
		updateCanvas(canvasData: Record<string, any>): Promise<any>;
		downloadPdf(canvasData: Record<string, any>): Promise<string>;
}