import React from "react";

import { ICreateCanvasTemplate } from "../../../common/redux/interfaces";
import CanvasTemplateReview from "../../../../assets/ui/canvasTemplateReview/canvasTemplateReview";

/** @description Component for viewing the constructed grid layout. */
const Preview = (props: {
  templateData: ICreateCanvasTemplate
}) => {
  const { templateData } = props;

  return (
    <div className="preview">
      <div className="canvas-template-review__cover"></div>
      <CanvasTemplateReview templateData={templateData} />
    </div>
  )
}

export default Preview;