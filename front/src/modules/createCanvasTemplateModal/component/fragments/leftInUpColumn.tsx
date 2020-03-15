import React from "react";
import { LS } from "../../../../utils/helpers";
import { ICreateCanvasTemplate } from "../../../common/redux/interfaces";

const LeftInUpColumn = (props: {
  templateState: ICreateCanvasTemplate,
  setTemplateState: Function
}) => {
  const { templateState, setTemplateState } = props;
  return (
    <div className="left-in-up-column">
      <div className="left-in-up-column__fields">
        <div>
          <p>{LS("Rows_count")}</p>
          <input type="text" onChange={(e: any) => {
            templateState.rows = parseInt(e.target.value, 10);
            setTemplateState({ ...templateState });
          }}/>
        </div>
        <div>
          <p>{LS("Columns_count")}</p>
          <input type="text" onChange={(e: any) => {
            templateState.columns = parseInt(e.target.value, 10);
            setTemplateState({ ...templateState });
          }}/>
        </div>
      </div>
    </div>
  )
}

export default LeftInUpColumn;