import React, { useState } from "react";
import { Modal } from "antd";
import { LS } from "../../utils/helpers";

const CreateCanvasModal = (props: {
  isOpened: boolean,
  setModalState: Function
}) => {
  const { isOpened, setModalState } = props;
  const [loading, setLoading] = useState(false);
  const [canvasType, setCanvasType] = useState("Lean");
  return (
    <div className="create-canvas-modal">
      <Modal
        visible={isOpened}
        onOk={() => {
          setLoading(true);
        }}
        confirmLoading={loading}
        onCancel={() => setModalState(false)}
        width={431}
      >
        <div className="create-canvas-modal__title">
          <p>{LS("Create")} {LS("Canvas")}</p>
        </div>
        <div className="create-canvas-modal__name-field">
          <input type="text" placeholder={LS("Enter_canvas_name")}/>
        </div>
        <div className="create-canvas-modal__type-choice">
          <button onClick={() => setCanvasType("Lean") }>Lean</button>
        </div>
      </Modal>
    </div>
  )
}

export default CreateCanvasModal;