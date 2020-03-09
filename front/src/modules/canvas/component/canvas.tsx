import React from "react";
import { connect } from "react-redux";

import { IReduxStore } from "../../common/redux/interfaces";

import CanvasHeader from "./fragments/canvasHeader";
import CanvasBody from "./fragments/canvasBody";

const Canvas = (props: {
	language: string,
	canvasActionType: string
}) => {
	
	const obj = {
		title: "Canvas Title",
		type: "Lean",
		columns: 3,
		rows: 1,
		data: {
			one: {
				position: [1, 1, 1, 1],
				title: "one",
				content: "Hulu Mulu Blu"
			},
			two: {
				position: [1, 1, 2, 3],
				title: "two",
				content: "Double Hulu Mulu Blu"
			},
			three: {
				position: [1, 1, 3, 4],
				title: "three",
				content: "Double Hulu Mulu Blu"
			},
			four: {
				position: [2, 2, 1, 4],
				title: "four",
				content: "Double Hulu Mulu Blu"
			}
		}
	}

	return (
		<div className="canvas">
			<CanvasHeader title={obj.title} type={obj.type} canvasActionType={props.canvasActionType} />
			<CanvasBody canvasData={obj} />
		</div>
	)
}

const mapStateToProps = (state: IReduxStore) => {
	console.log(state)
	return {
		language: state.commonReducer.language,
		canvasActionType: state.canvasReducer.canvasActionType
	}
}

export default connect(mapStateToProps, null)(Canvas);