/** @module CreateCanvasTemplateModal */
import React, { useState } from "react";
import { container } from "tsyringe";
import { Modal, message } from "antd";

import { LS } from "../../../utils/helpers";
import { ICreateCanvasTemplateModalService } from "../interfaces";

import Preview from "./fragments/preview";
import LeftInUpColumn from "./fragments/leftInUpColumn";
import EmptyPreview from "./fragments/emptyPreview";
import RightInUpColumn from "./fragments/rightInUpColumn";
import CreateCanvasTemplateModalBody from "./fragments/createCanvasTemplateModalBody";


const CreateCanvasTemplateModal = (props: {
  modalState: boolean,
  setModalState: Function
}) => {
  const { modalState, setModalState } = props;
  const createCanvasTemplateModalService: ICreateCanvasTemplateModalService = container
  .resolve("createCanvasTemplateModalService");

  const [loadingState, setLoadingState] = useState(false);
  const [templateState, setTemplateState] = useState({
    ownerId: null,
    title: null,
    type: null,
    date: null,
    rows: null,
    columns: null,
    data: [
      {
        position: [],
        title: "",
        content: "",
        description: ""
      },
    ]
  });

  return (
    <div className="create-canvas-template-modal">
      <Modal
        title={<p className="create-canvas-template-modal__title">{LS("Create_canvas_template")}</p>}
        visible={modalState}
        onOk={() => {
          setLoadingState(true);
          createCanvasTemplateModalService.createCanvasTemplate(templateState)
          .then(() => setModalState(false))
          .catch(() => {
            message.error(LS("Something_went_wrong"));
          })
          .finally(() => setLoadingState(false));
        }}
        onCancel={() => setModalState(false)}
        confirmLoading={loadingState}
        width={800}
      >
        <div className="create-canvas-template-modal__up">
          <LeftInUpColumn
            templateState={templateState}
            setTemplateState={setTemplateState}
          />
          {(() => {
            switch(templateState.data[0].position.length) {
              case 0: return <EmptyPreview />; break;
              default: return <Preview templateData={templateState} />
            }
          })()}
          <RightInUpColumn
            templateState={templateState}
            setTemplateState={setTemplateState}
          />
        </div>
        <div className="create-canvas-template-modal__low">
          <CreateCanvasTemplateModalBody
            templateState={templateState}
            setTemplateState={setTemplateState}
          />
        </div>
      </Modal>
    </div>
  )
}

export default CreateCanvasTemplateModal;