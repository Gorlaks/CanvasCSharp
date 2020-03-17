import React from "react";

import { LS } from "../../../utils/helpers";

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