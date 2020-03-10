import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Modal } from "antd";
import { container } from "tsyringe";
import { LS } from "../../utils/helpers";
import { RoutePath } from "../../utils/constants";
import { ICanvasService } from "../canvas/interfaces";
import { IUserAuthData } from "../common/redux/interfaces"
import { ILocalStorageApi } from "../common/storage/interfaces"

const CreateCanvasModal = (props: {
  isOpened: boolean,
  setModalState: Function,
  userAuthData: IUserAuthData
}) => {
  const history = useHistory();
  const canvasService: ICanvasService = container.resolve("canvasService");
  const localStorageApi:ILocalStorageApi  = container.resolve("localStorageApi");
  const { isOpened, setModalState } = props;
  const [loadingState, setLoadingState] = useState(false);
  const [title, setTitle] = useState("");
  const [canvasType, setCanvasType] = useState("Lean");
  return (
    <div className="create-canvas-modal">
      <Modal
        visible={isOpened}
        onOk={() => {
          const userId = props.userAuthData.id;
          setLoadingState(true);
          canvasService.createCanvas(userId, title, canvasType)
          .then((item: {id: string}) => {
            localStorageApi.setLocalData("canvasId", item.id);
            history.push(RoutePath.CANVAS_PATH);
          })
          .catch(() => LS("Something_went_wrong"))
          .finally(() => setLoadingState(false));
        }}
        confirmLoading={loadingState}
        onCancel={() => setModalState(false)}
        width={431}
      >
        <div className="create-canvas-modal__title">
          <p>{LS("Create")} {LS("Canvas")}</p>
        </div>
        <div className="create-canvas-modal__name-field">
          <input
            type="text"
            placeholder={LS("Enter_canvas_name")}
            onChange={(e: any) => setTitle(e.target.value)}
          />
        </div>
        <div className="create-canvas-modal__type-choice">
          <button onClick={() => setCanvasType("Lean") }>Lean</button>
        </div>
      </Modal>
    </div>
  )
}

export default CreateCanvasModal;