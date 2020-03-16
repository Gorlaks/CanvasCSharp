import React from "react";

import { LS } from "../../../../utils/helpers";
import { ICreateCanvasTemplate } from "../../../common/redux/interfaces";

const Preview = (props: {
  templateData: ICreateCanvasTemplate
}) => {
  const { templateData } = props;
  const { columns, rows, data } = templateData;

  const canvasContentStyles = {
    gridTemplateRows: `repeat(${columns}, 1fr)`,
    gridTemplateColumns: `repeat(${rows}, 1fr)`
  }

  return (
    <div className="preview" style={canvasContentStyles}>
      <div className="preview__cover"></div>
      {data.length && Object.keys(data).map((item, index) => {
        const { position, title } = (data as any)[item];
        const canvasItemStyles = {
          gridArea: `${position[0]}/${position[1]}/${position[2]}/${position[3]}`
        }
        return (
          <>
            {data[index].position.length > 0 && <div key={index} style={canvasItemStyles}>
              <p className="preview__title">
                <span>{++index}.</span> {LS(title)}
              </p>
            </div>}
          </>
        )
      })}
    </div>
  )
}

export default Preview;