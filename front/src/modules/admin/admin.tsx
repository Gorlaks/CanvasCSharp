import React from "react";
import { Tabs } from "antd";
import { connect } from "react-redux";

import { LS } from "../../utils/helpers";

import Panel from "./fragments/panel";
import { IReduxStore } from "../common/redux/interfaces";

const { TabPane } = Tabs;

const Admin = (props: {
  language?: string
}) => {
  return (
    <div className="admin">
      <header>
        <p className="admin__title">{LS("Administration")}</p>
        <Panel />
      </header>
      <div className="admin__content">
        
      </div>
    </div>
  )
}

const mapStateToProps = (state: IReduxStore) => {
  return {
    language: state.commonReducer.language
  }
}

export default connect(mapStateToProps, null)(Admin);