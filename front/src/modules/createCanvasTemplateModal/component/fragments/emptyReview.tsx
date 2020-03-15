import React from "react";
import { LS } from "../../../../utils/helpers";

const EmptyReview = () => {
  return (
    <div className="empty-review">
      <p>{LS("Preview")}</p>
    </div>
  )
}

export default EmptyReview;