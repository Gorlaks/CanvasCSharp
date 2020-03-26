/** @description Stories of admin component. */
import React from "react";

import 'antd/dist/antd.css';
import "../index.scss";

import commonStatesStorage from "../initialize/statesStorages/commonStatesStorage";
import Admin from "../modules/admin/admin";

/**
 * @description Admin component.
 * @module Admin.
*/
export const WithAdmin = () => {
  commonStatesStorage.registState<string>("language", {
    state: "en",
    setState: () => {}
  });
  return <Admin />;
};

export default { title: "Admin" };