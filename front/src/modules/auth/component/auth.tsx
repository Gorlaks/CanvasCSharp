import React from "react";
import { Tabs } from "antd";
import { connect } from "react-redux";

import Login from "./fragments/login";
import Registration from "./fragments/registration";
import { LS } from "../../../utils/helpers";
import { IReduxStore } from "../../common/redux/interfaces";

const { TabPane } = Tabs;

const Auth = (props: {
	language: string
}) => {
	const tabBarStyle = {
		display: "flex",
		justifyContent: "center"
	}
	return (
		<div className="auth">
			<div className="auth__form">
				<Tabs defaultActiveKey="Login" size="large" tabBarStyle={tabBarStyle}>
					<TabPane tab={LS("Login_tab")} key="Login">
						<Login language={props.language} />
        </TabPane>
					<TabPane tab={LS("Registration_tab")} key="Registration">
						<Registration language={props.language} />
        </TabPane>
				</Tabs>
			</div>
		</div>
	);
};

const mapStateToProps = (state: IReduxStore) => {
	return {
		language: state.commonReducer.language
	}
}

export default connect(mapStateToProps, null)(Auth);