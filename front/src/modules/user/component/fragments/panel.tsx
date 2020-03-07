import React from "react";
import { LS } from "../../../../utils/helpers";
import { PlusOutlined } from "@ant-design/icons"

const Panel = () => {
	return (
		<div className="user__panel">
			<button className="user__panel__btn-wrapper">
				<p><PlusOutlined /></p>
				<span>{LS("Create")}</span>
			</button>
		</div>
	)
}

export default Panel;