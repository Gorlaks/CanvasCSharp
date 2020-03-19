import React from "react";
import { useHistory } from "react-router-dom";
import { message } from "antd";
import { container } from "tsyringe";

import { LS } from "../../../../utils/helpers";
import { RoutePath } from "../../../../utils/constants";
import { ICanvasService } from "../../../canvas/interfaces";
import { ILocalStorageApi } from "../../../common/storage/interfaces";
import { IUserAuthData } from "../../../common/redux/interfaces";


const ActionCell = (props: {
  userAuthData: IUserAuthData,
  record: any
}) => {
  const { record } = props;
  const history = useHistory();
	const canvasService: ICanvasService = container.resolve("canvasService");
	const localStorageApi: ILocalStorageApi = container.resolve("localStorageApi");
  return (
    <div className="user__table__actions">
      <button className="user__table__action-btn" onClick={() => {
        localStorageApi.setLocalData("canvasId", record.id);
        const canvasId = localStorageApi.getLocalData("canvasId", null);
        if (!canvasId) message.error(LS("Id is not found"));
        else history.push(RoutePath.CANVAS_PATH)
      }}>{LS("Edit")}</button>

      <div className="user__table__actions-separator"></div>

      <button className="user__table__action-btn" onClick={() => {
        const loading = message.loading(LS("Loading"));
        canvasService.deleteCanvas(props.userAuthData.id, record.id)
          .then((item: { id: string }) => {
            canvasService.setCanvasListAfterRemoving(item.id);
          })
          .catch(() => message.error(LS("Something_went_wrong")))
          .finally(() => loading());
      }}>
        {LS("Delete")}
      </button>
    </div>
  )
}

export default ActionCell;