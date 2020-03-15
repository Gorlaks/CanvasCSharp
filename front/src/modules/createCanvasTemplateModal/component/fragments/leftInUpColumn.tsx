import React from "react";
import { LS } from "../../../../utils/helpers";

const LeftInUpColumn = () => {
  return (
    <div className="left-in-up-column">
      <div>
        <p>{LS("Rows")}</p>
        <input type="text" placeholder="Rows"/>
      </div>
    </div>
  )
}

export default LeftInUpColumn;