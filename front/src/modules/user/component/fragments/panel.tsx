import React from "react";

import { LS } from "../../../../utils/helpers";
import { PlusButton } from "../../../../assets/ui/ui";

const Panel = () => {
	return (
		<div className="user__panel">
			<PlusButton text={LS("Create")} handleClick={() => {}} />
		</div>
	)
}

export default Panel;