import React from "react";
import { LS } from "../../../../utils/helpers";

const EmptyPreview = () => {
  return (
    <div className="empty-preview">
      <div className="preview__cover"></div>
      <p>{LS("Preview")}</p>
    </div>
  )
}

export default EmptyPreview;