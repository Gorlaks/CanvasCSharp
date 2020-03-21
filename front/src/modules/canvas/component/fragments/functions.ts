import { message } from "antd";

import { LS } from "../../../../utils/helpers";
import { ICanvasBlocksData } from "../../../common/redux/interfaces";
import { ICanvasService } from "../../interfaces";

/**
 * @description Write user's content of canvas to canvasData.data for sending to the server.
*/
export const writeContentToCanvasDataBlocks = (e: any, canvasData: Record<string, any>) => {
	canvasData.data = canvasData.data.map((item: ICanvasBlocksData) => {
		if (item.title === e.target.dataset.title) {
			item.content = e.target.value;
			return item
		}
		return item
	})
};

/**
 * @description Update canvas function.
*/
export const handleUpdate = (props: {
  canvasData: Record<string, any>,
  canvasService: ICanvasService
}) => {
	const { canvasData, canvasService } = props;
	const loading = message.loading(LS("Loading"));
	canvasService.updateCanvas(canvasData)
		.then(() => message.success(LS("Canvas_success_update")))
		.catch((e: { error: string }) => message.error(e.error))
		.finally(() => loading());
};

/**
 * @description The method for download canvas in pdf format.
*/
export const handleDownloadPdf = (props: {
  canvasData: Record<string, any>,
  canvasService: ICanvasService
}) => {
	const { canvasData, canvasService } = props;
	const loading = message.loading(LS("Loading"));
	canvasService.downloadPdf(canvasData)
		.then((item: string) => window.open(item))
		.catch((e: { error: string }) => message.error(e.error))
		.finally(() => loading());
};