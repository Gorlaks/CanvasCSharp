import React from "react";

import { LS } from "../../../../utils/helpers";
import PlusButton from "../../../../assets/ui/plusButton/plusButton";

const Panel = (props: {
	setCreateCanvasModalState: Function
}) => {
	const { setCreateCanvasModalState } = props;
	return (
		<div className="user__panel">
			<PlusButton text={LS("Create")} handleClick={() => setCreateCanvasModalState(true)} />
		</div>
	)
}

export default Panel;