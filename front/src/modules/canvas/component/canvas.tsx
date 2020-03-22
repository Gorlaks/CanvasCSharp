/** @module Canvas */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { container } from "tsyringe";
import { message } from "antd";

import { IReduxStore, IUserAuthData } from "../../common/redux/interfaces";
import { ILocalStorageApi } from "../../common/storage/interfaces";
import { RoutePath } from "../../../utils/constants";
import { ICanvasRepository } from "../interfaces";

import CanvasContent from "./fragments/canvasContent";
import ComponentLoading from "../../../assets/ui/componentLoading/componentLoading";
import { LS } from "../../../utils/helpers";

const Canvas = (props: {
	language: string
}) => {
	const history = useHistory();
	const localStorageApi: ILocalStorageApi = container.resolve("localStorageApi");
	const canvasRepository: ICanvasRepository = container.resolve("canvasRepository");
	const canvasId: string = localStorageApi.getLocalData("canvasId", "");
	const userAuthData: IUserAuthData = localStorageApi.getLocalData("userAuthData", {});

	/** @description Canvas data for building grid layout. */
	const [canvasDataState, setCanvasDataState] = useState({ data: null });

	/**
	 * @description Make a request about choosen canvas to the server
	 * and put received information to redux store.
	*/
	useEffect(() => {
		if (!canvasId || canvasId === "undefined") history.push(RoutePath.USER_PATH);
		else {
			canvasRepository.getCanvasById(userAuthData.id, canvasId)
				.then((item: any) => {
					if (!item.error) setCanvasDataState(item);
					else message.error(LS(item.error))
				});
		}
	}, [])

	return (
		<div className="canvas">
			{canvasDataState.data ? <CanvasContent canvasData={canvasDataState} />
				: <div className="canvas__component-loading"><ComponentLoading /></div>}
		</div>
	)
}

const mapStateToProps = (state: IReduxStore) => {
	return {
		language: state.commonReducer.language
	}
}

export default connect(mapStateToProps, null)(Canvas);