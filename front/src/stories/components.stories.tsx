/** @description Stories of react components from modules folder. */
import React from "react";

import 'antd/dist/antd.css';
import "../index.scss";

import Header from "../modules/header/component/header";
import Admin from "../modules/admin/admin";
import CreateCanvasModal from "../modules/createCanvasModal/createCanvasModal";
import CreateCanvasTemplateModal from "../modules/createCanvasTemplateModal/component/createCanvasTemplateModal";

/**
 * @description Header component.
 * @module Header.
*/
export const WithHeader = () => <Header />;

/**
 * @description Admin component.
 * @module Admin.
*/
export const WithAdmin = () => {
  return <Admin />
};

/** 
 * @description Modal window for canvas template creating.
 * @module CreateCanvasTemplateModal.
*/
export const WithCreateCanvasTemplateModal = () => {
  return (
    <CreateCanvasTemplateModal
      modalState={true}
      setModalState={() => { }}
    />
  )
}

/** 
 * @description Modal window for canvas creating.
 * @module CreateCanvasModal.
*/
export const WithCreateCanvasModal = () => {
  return (
    <CreateCanvasModal
      isOpened={true}
      setModalState={() => { }}
      userAuthData={{
        id: "",
        login: "",
        email: ""
      }}
    />
  )
}

export default { title: "Components" };