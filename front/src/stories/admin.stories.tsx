/** @description Stories of admin component. */
import React from "react";

import 'antd/dist/antd.css';
import "../index.scss";

import Admin from "../modules/admin/admin";

/**
 * @description Admin component.
 * @module Admin.
*/
export const WithAdmin = () => {
  return <Admin />;
};

export default { title: "Admin" };