import React from "react";
import { newStrokeInTextArea, resizeContainer } from "../../../../utils/helpers"
import { ICanvasData } from "../../../common/redux/interfaces";

const CanvasBody = (props: {
	canvasData: ICanvasData
}) => {

	const { columns, rows, data } = props.canvasData;

	const canvasContentStyles = {
		gridTemplateRows: `repeat(${rows}, 1fr)`,
		gridTemplateColumns: `repeat(${columns}, 1fr)`
	}

	return (
		<div className="canvas__body" style={canvasContentStyles}>
			{Object.keys(data).map((item, index) => {
				const { position, title, content } = (data as any)[item];
				const canvasItemStyles = {
					gridArea: `${position[0]}/${position[1]}/${position[2]}/${position[3]}`
				}
				return (
					<div key={index} style={canvasItemStyles}>
						<p className="canvas__body__title">
							{title}
						</p>
						<textarea
							defaultValue={content}
							onKeyPress={newStrokeInTextArea}
							onChange={resizeContainer}
							className="canvas__body__content"
						></textarea>
					</div>
				)
			})}
		</div>
	)
}

export default CanvasBody;