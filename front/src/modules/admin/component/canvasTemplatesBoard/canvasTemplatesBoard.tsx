import React from "react";

import CanvasTemplateReview from "../../../../assets/ui/canvasTemplateReview/canvasTemplateReview";
import { LS } from "../../../../utils/helpers";

const CanvasTemplatesBoard = (props: {
  data: Array<any>
}) => {
  const { data } = props;
  return (
    <div className="canvas-templates-board">
      {Boolean(data.length) && data.map(item => {
        return (
          <div className="canvas-templates-board__template-wrapper">
            <p className="canvas-templates-board__type-name">{item.type}</p>
            <div className="canvas-templates-board__template">
              <div className="canvas-templates-board__carpet"></div>
              <CanvasTemplateReview templateData={item} />
            </div>
            <div className="canvas-templates-board__actions">
              <button>{LS("Delete")}</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CanvasTemplatesBoard;