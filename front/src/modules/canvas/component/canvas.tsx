import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { container } from "tsyringe";

import { IReduxStore } from "../../common/redux/interfaces";
import { ILocalStorageApi } from "../../common/storage/interfaces";
import { RoutePath, CanvasActionType } from "../../../utils/constants";

import CanvasHeader from "./fragments/canvasHeader";
import CanvasBody from "./fragments/canvasBody";

const Canvas = (props: {
	language: string
}) => {
	const history = useHistory();
	const localStorageApi: ILocalStorageApi = container.resolve("localStorageApi");
	const canvasActionType: string = localStorageApi.getLocalData("canvasActionType", null);

	useEffect(() => {
		if(
			canvasActionType !== CanvasActionType.CREATE &&
			canvasActionType !== CanvasActionType.UPDATE
		) history.push(RoutePath.USER_PATH);
	}, [])

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
			<CanvasHeader title={obj.title} type={obj.type} canvasActionType={canvasActionType} />
			<CanvasBody canvasData={obj} />
		</div>
	)
}

const mapStateToProps = (state: IReduxStore) => {
	return {
		language: state.commonReducer.language
	}
}

export default connect(mapStateToProps, null)(Canvas);