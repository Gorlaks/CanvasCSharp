import React, { useState } from "react";
import { connect } from "react-redux";

import { LS } from "../../../utils/helpers";
import { IReduxStore, IUserAuthData, ICanvasList } from "../../common/redux/interfaces"

import Panel from "./fragments/panel";
import Table from "./fragments/table";
import CreateCanvasModal from "../../createCanvasModal/createCanvasModal";

const User = (props: {
	language: string,
	userAuthData: IUserAuthData,
	canvasList: Array<ICanvasList>
}) => {
	const [createCanvasModalIsOpened, setCreateCanvasModalState] = useState(false);

	return (
		<div className="user">
			<p className="user__title">{LS("Canvas_list")}</p>
			<Panel setCreateCanvasModalState={setCreateCanvasModalState} />
			<Table
				userAuthData={props.userAuthData}
				canvasList={props.canvasList}
			/>
			<CreateCanvasModal
				isOpened={createCanvasModalIsOpened}
				setModalState={setCreateCanvasModalState}
			/>
		</div>
	)
}

const mapStateToProps = (state: IReduxStore) => {
	return {
		language: state.commonReducer.language,
		userAuthData: state.userReducer.userAuthData,
		canvasList: state.userReducer.canvasList
	}
}

export default connect(mapStateToProps, null)(User);