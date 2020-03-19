import React from "react";

import { LS } from "../../../utils/helpers";

/**@desc Cell with some actions in table of users.*/
const ActionCell = () => {
  return (
    <div className="user__table__actions">
      <button >{LS("Projects")}</button>
      <div className="user__table__actions-separator"></div>
      <button>
        {LS("Delete")}
      </button>
    </div>
  )
}

export default ActionCell;