import React from "react";
import { useHistory } from "react-router-dom";
import { container } from "tsyringe";
import { message } from "antd";
import { LeftOutlined } from "@ant-design/icons";

import { PlusButton } from "../../../../assets/ui/ui";
import { newStrokeInTextArea, resizeContainer, LS } from "../../../../utils/helpers";
import { RoutePath } from "../../../../utils/constants";
import { ICanvasBlocksData } from "../../../common/redux/interfaces";
import { ICanvasService } from "../../interfaces";

const CanvasContent = (props: {
	canvasData: Record<string, any>
}) => {
	const history = useHistory();
	const { canvasData } = props;
	const { columns, rows, data, title, type } = canvasData;

	const canvasContentStyles = {
		gridTemplateRows: `repeat(${rows}, 1fr)`,
		gridTemplateColumns: `repeat(${columns}, 1fr)`
	}

	return (
		<div>
			<header className="canvas__header">
				<div className="canvas__header__up">
					<button className="back-arrow" onClick={() => history.push(RoutePath.USER_PATH)}><LeftOutlined /></button>
					<span className="title">{LS("Editing")} {LS("Canvas")}</span>
					<span className="type">{type}</span>
					<PlusButton text={LS("Save")} handleClick={handleUpdate} />
				</div>
				<div className="canvas__header__low">
					<input type="text" placeholder={LS("Enter_canvas_name")} defaultValue={title} onChange={(e: any) => canvasData.title = e.target.value} />
				</div>
			</header>

			<div className="canvas__body" style={canvasContentStyles}>
				{props.canvasData.id && Object.keys(data).map((item, index) => {
					const { position, title, content, description } = (data as any)[item];
					const canvasItemStyles = {
						gridArea: `${position[0]}/${position[1]}/${position[2]}/${position[3]}`
					}
					return (
						<div key={index} style={canvasItemStyles}>
							<p className="canvas__body__title">
								{++index}. {LS(title)}
							</p>
							<textarea
								data-title={title}
								placeholder={LS(description)}
								defaultValue={content}
								onKeyPress={newStrokeInTextArea}
								onChange={(e: any) => {
									resizeContainer(e);
									writeContentToCanvasDataBlocks(e, canvasData)
								}}
								className="canvas__body__content"
							></textarea>
						</div>
					)
				})}
			</div>
		</div>
	)
}

const writeContentToCanvasDataBlocks = (e: any, canvasData: Record<string, any>) => {
	canvasData.data = canvasData.data.map((item: ICanvasBlocksData) => {
		if (item.title === e.target.dataset.title) {
			item.content = e.target.value;
			return item
		}
		return item
	})
}

const handleUpdate = (canvasData: Record<string, any>) => {
	const canvasService: ICanvasService = container.resolve("canvasService");
	const loading = message.loading(LS("Loading"));
	canvasService.updateCanvas(canvasData)
		.then(() => message.success(LS("Canvas_success_update")))
		.catch(() => message.error(LS("Something_went_wrong")))
		.finally(() => loading());
}

export default CanvasContent;