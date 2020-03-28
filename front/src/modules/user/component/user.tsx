/** @module User */
import React, { useState } from "react";

import localStorageApi from "../../../initialize/api/localStorageApi";
import userStatesStorage from "../../../initialize/statesStorages/userStatesStorage";
import Panel from "./fragments/panel";
import Table from "./fragments/table";
import CreateCanvasModal from "../../createCanvasModal/createCanvasModal";
import { ICanvasList } from "../interfaces";
import { LS } from "../../../utils/helpers";

const User = () => {
	const [canvasList, setCanvasList] = useState([]);
	userStatesStorage.registState<Array<ICanvasList>>("canvasList", {
		state: canvasList,
		setState: setCanvasList
	});
	/** @description State of modal for creating of canvas. */
	const [createCanvasModalIsOpened, setCreateCanvasModalState] = useState(false);
	const userAuthData = localStorageApi.getLocalData("userAuthData", {});

	return (
		<div className="user">
			<p className="user__title">{LS("Canvas_list")}</p>
			<Panel setCreateCanvasModalState={setCreateCanvasModalState} />
			<Table
				userAuthData={userAuthData}
				canvasList={canvasList}
			/>
			<CreateCanvasModal
				isOpened={createCanvasModalIsOpened}
				setModalState={setCreateCanvasModalState}
				userAuthData={userAuthData}
			/>
		</div>
	)
}

export default User;