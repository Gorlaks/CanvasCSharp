import React, { useState } from "react";
import { Modal } from "antd";

import Review from "./fragments/review";
import LeftInUpColumn from "./fragments/leftInUpColumn";
import EmptyReview from "./fragments/emptyReview";
import RightInUpColumn from "./fragments/rightInUpColumn";
import CreateCanvasTemplateModalBody from "./fragments/createCanvasTemplateModalBody";

const CreateCanvasTemplateModal = () => {
  const defaultTemplate = {
    ownerId: null,
    title: null,
    type: null,
    date: null,
    rows: 4,
    columns: 4,
    data: [
      {
        position: [],
        title: "",
        content: "",
        description: ""
      },
    ]
  }
  const [templateState, setTemplateState] = useState(defaultTemplate);
  return (
    <div className="create-canvas-template-modal">
      <Modal
        title="Canvas template creater"
        visible={true}
        onOk={() => { }}
        onCancel={() => { }}
        width={800}
      >
        <div className="create-canvas-template-modal__up">
          <LeftInUpColumn />
          {(() => {
            switch(templateState.data[0].position.length) {
              case 0: return <EmptyReview />; break;
              default: return <Review templateData={templateState} />
            }
          })()}
          <RightInUpColumn />
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