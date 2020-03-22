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
import { ICreateCanvasTemplate } from "../../common/redux/interfaces";


const CreateCanvasTemplateModal = (props: {
  modalState: boolean,
  setModalState: Function
}) => {
  const { modalState, setModalState } = props;
  const createCanvasTemplateModalService: ICreateCanvasTemplateModalService = container
    .resolve("createCanvasTemplateModalService");

  const [loadingState, setLoadingState] = useState(false);
  /** @description default canvas template data. */
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
        /** @description Create canvas template action. */
        onOk={() => handleOk({
          createCanvasTemplateModalService,
          setLoadingState,
          setModalState,
          templateState
        })}
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
            switch (templateState.data[0].position.length) {
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

/** @description Function for ok attribute in modal component */
const handleOk = (props: {
  templateState: ICreateCanvasTemplate
  createCanvasTemplateModalService: ICreateCanvasTemplateModalService,
  setLoadingState: Function,
  setModalState: Function
}) => {
  const {
    templateState,
    createCanvasTemplateModalService,
    setLoadingState,
    setModalState
  } = props;

  setLoadingState(true);
  createCanvasTemplateModalService.createCanvasTemplate(templateState)
    .then((item: Record<string, string>) => {
      if (!item.error) setModalState(false);
      else message.error(LS(item.error));
    })
    .catch((e: ExceptionInformation) => message.error(LS(e.toString())))
    .finally(() => setLoadingState(false));
}

export default CreateCanvasTemplateModal;