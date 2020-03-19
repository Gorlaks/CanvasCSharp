import React from "react";
import { Provider } from "react-redux";

import "reflect-metadata";
import 'antd/dist/antd.css';
import "../index.scss";

import initModules from "../initialize/modules";
import initStore from "../initialize/store";

import Header from "../modules/header/component/header";
import Admin from "../modules/admin/admin";
import CreateCanvasModal from "../modules/createCanvasModal/createCanvasModal";
import CreateCanvasTemplateModal from "../modules/createCanvasTemplateModal/component/createCanvasTemplateModal";

initModules();
const store = initStore();;

export const WithHeader = () => <Header />;

export const WithAdmin = () => {
  return (
    <Provider store={store}>
      <Admin />
    </Provider>
  )
};

export const WithCreateCanvasTemplateModal = () => {
  return (
    <CreateCanvasTemplateModal
      modalState={true}
      setModalState={() => { }}
    />
  )
}

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