/** @description Stories of CreateCanvasModal component. */
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import 'antd/dist/antd.css';
import "../index.scss";

import CreateCanvasModal from "../modules/createCanvasModal/createCanvasModal";

/** 
 * @description Modal window for canvas creating.
 * @module CreateCanvasModal.
*/
export const WithCreateCanvasModal = () => {
  return (
    <Router>
      <CreateCanvasModal
        isOpened={true}
        setModalState={() => { }}
        userAuthData={{
          id: "",
          login: "",
          email: ""
        }}
      />
    </Router>
  );
};

export default { title: "CreateCanvasModal" };