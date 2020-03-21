/** @module Canvas */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { container } from "tsyringe";

import { IReduxStore, IUserAuthData } from "../../common/redux/interfaces";
import { ILocalStorageApi } from "../../common/storage/interfaces";
import { RoutePath } from "../../../utils/constants";
import { ICanvasRepository } from "../interfaces";

import CanvasContent from "./fragments/canvasContent";

const Canvas = (props: {
	language: string
}) => {
	const history = useHistory();
	const localStorageApi: ILocalStorageApi = container.resolve("localStorageApi");
	const canvasRepository: ICanvasRepository = container.resolve("canvasRepository");
	const canvasId: string = localStorageApi.getLocalData("canvasId", "");
	const userAuthData: IUserAuthData = localStorageApi.getLocalData("userAuthData", {});

	/** @description Canvas data for building grid layout. */
	const [canvasDataState, setCanvasDataState] = useState({});

	/**
	 * @description Make a request about choosen canvas to the server
	 * and put received information to redux store.
	*/
	useEffect(() => {
		if(!canvasId || canvasId === "undefined") history.push(RoutePath.USER_PATH);
		canvasRepository.getCanvasById(userAuthData.id, canvasId)
		.then(item => setCanvasDataState(item));
	}, [])
	
	return (
		<div className="canvas">
			<CanvasContent canvasData={canvasDataState} />
		</div>
	)
}

const mapStateToProps = (state: IReduxStore) => {
	return {
		language: state.commonReducer.language
	}
}

export default connect(mapStateToProps, null)(Canvas);