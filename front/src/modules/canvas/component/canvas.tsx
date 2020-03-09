import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { container } from "tsyringe";

import { IReduxStore, IUserAuthData } from "../../common/redux/interfaces";
import { ILocalStorageApi } from "../../common/storage/interfaces";
import { RoutePath, CanvasActionType } from "../../../utils/constants";
import { ICanvasRepository } from "../interfaces";

import CanvasHeader from "./fragments/canvasHeader";
import CanvasBody from "./fragments/canvasBody";

const Canvas = (props: {
	language: string
}) => {
	const history = useHistory();
	const localStorageApi: ILocalStorageApi = container.resolve("localStorageApi");
	const canvasRepository: ICanvasRepository = container.resolve("canvasRepository");
	const canvasActionType: string = localStorageApi.getLocalData("canvasActionType", null);
	const canvasId: string = localStorageApi.getLocalData("canvasId", null);
	const userAuthData: IUserAuthData = localStorageApi.getLocalData("userAuthData", {});

	const [canvasState, setCanvasState] = useState({});

	useEffect(() => {
		if(
			canvasActionType !== CanvasActionType.CREATE &&
			canvasActionType !== CanvasActionType.UPDATE ||
			!canvasId
		) history.push(RoutePath.USER_PATH);
		canvasRepository.getCanvasById(userAuthData.id, canvasId)
		.then(item => setCanvasState(item));
	}, [])

	return (
		<div className="canvas">
			<CanvasHeader canvasData={canvasState} canvasActionType={canvasActionType} />
			<CanvasBody canvasData={canvasState} />
		</div>
	)
}

const mapStateToProps = (state: IReduxStore) => {
	return {
		language: state.commonReducer.language
	}
}

export default connect(mapStateToProps, null)(Canvas);