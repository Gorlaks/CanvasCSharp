import React from "react";
import { LS } from "../../../../utils/helpers";

const EmptyPreview = () => {
  return (
    <div className="empty-review">
      <p>{LS("Preview")}</p>
    </div>
  )
}

export default EmptyPreview;