import React from "react";
import { LS } from "../../../../utils/helpers";
import { PlusButton } from "../../../../assets/ui/ui";

const CanvasHeader = (props: {
	title: string,
	type: string,
	canvasActionType: string
}) => {
	const { title, type, canvasActionType } = props;
	return (
		<div className="canvas__header">
			<div className="canvas__header__up">
				<span className="title">{LS(canvasActionType)} {LS("Canvas")}</span>
				<span className="type">{type}</span>
				<PlusButton text={LS(canvasActionType)} handleClick={() => {}} />
			</div>
			<div className="canvas__header__low">
				<input type="text" placeholder={LS("Enter_canvas_name")}/>
			</div>
		</div>
	)
}

export default CanvasHeader;