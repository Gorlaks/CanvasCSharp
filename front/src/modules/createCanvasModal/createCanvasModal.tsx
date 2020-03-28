/** @module CreateCanvasModal */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Modal, message } from "antd";

import canvasService from "../../initialize/services/canvasService";
import localStorageApi from "../../initialize/api/localStorageApi";
import { LS } from "../../utils/helpers";
import { RoutePath } from "../../utils/constants";
import { IUserAuthData } from "../auth/interfaces";

const CreateCanvasModal = (props: {
  isOpened: boolean,
  setModalState: Function,
  userAuthData: IUserAuthData
}) => {
  const { isOpened, setModalState } = props;

  const history = useHistory();

  /** @description Splash icon state in ok button. */
  const [loadingState, setLoadingState] = useState(false);
  const [title, setTitle] = useState("");
  const [canvasType, setCanvasType] = useState("Lean");

  return (
    <div className="create-canvas-modal">
      <Modal
        visible={isOpened}
        /** @description Create canvas action. */
        onOk={() => {
          const ownerId = props.userAuthData.id;
          setLoadingState(true);
          canvasService.createCanvas(ownerId, title, canvasType)
            .then((item: Record<string, string>) => {
              if (!item.error) {
                localStorageApi.setLocalData("canvasId", item.id);
                setLoadingState(false);
                history.push(RoutePath.CANVAS_PATH);
              } else message.error(LS(item.error));
            })
            .catch((e: ExceptionInformation) => {
              message.error(LS(e.toString()))
              setLoadingState(false);
            });
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
          <button onClick={() => setCanvasType("Lean")}>Lean</button>
        </div>
      </Modal>
    </div>
  )
}

export default CreateCanvasModal;