/** @module Admin */
import React from "react";
import { Tabs } from "antd";
import { connect } from "react-redux";

import { LS } from "../../utils/helpers";
import Panel from "./fragments/panel";
import { IReduxStore } from "../common/redux/interfaces";

import UsersTable from "./usersTable/usersTable";
import CanvasTemplatesBoard from "./canvasTemplatesBoard/canvasTemplatesBoard";

const { TabPane } = Tabs;

const Admin = (props: {
  language?: string
}) => {
  const tabBarStyle = {
		display: "flex",
		justifyContent: "center"
	}
  return (
    <div className="admin">
      <header>
        <p className="admin__title">{LS("Administration")}</p>
        <Panel />
      </header>
      <div className="admin__content">
        <Tabs defaultActiveKey="usersTable" size="large" tabBarStyle={tabBarStyle}>
          <TabPane tab={LS("Users")} key="usersTable">
            <UsersTable />
          </TabPane>
          <TabPane tab={LS("Canvas_templates")} key="canvasTemplatesBoard">
            <CanvasTemplatesBoard />
          </TabPane>
        </Tabs>
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