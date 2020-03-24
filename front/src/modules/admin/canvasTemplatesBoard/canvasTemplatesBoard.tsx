import React from "react";

import CanvasTemplateReview from "../../../assets/ui/canvasTemplateReview/canvasTemplateReview";
import { LS } from "../../../utils/helpers";
import { ICreateCanvasTemplate } from "../../canvas/interfaces";

const CanvasTemplatesBoard = () => {
  const defaultDatas: Array<ICreateCanvasTemplate> = [];

  return (
    <div className="canvas-templates-board">
      {Boolean(defaultDatas.length) && defaultDatas.map(item => {
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