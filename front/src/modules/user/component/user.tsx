import React from "react";
import { connect } from "react-redux";

import { LS } from "../../../utils/helpers";
import { IReduxStore } from "../../common/redux/interfaces"

import Panel from "./fragments/panel";
import Table from "./fragments/table";

const User = (props: {
	language?: string
}) => {
	return (
		<div className="user">
			<p className="user__title">{LS("Canvas list")}</p>
			<Panel />
			<Table />
		</div>
	)
}

const mapStateToProps = (state: IReduxStore) => {
	return {
		language: state.commonReducer.language
	}
}

export default connect(mapStateToProps, null)(User);