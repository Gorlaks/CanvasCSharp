import React from "react";
import { Table as AntTable } from "antd";

import ActionCell from "./actionCell";
import { LS } from "../../../utils/helpers";

const UsersTable = () => {
	/**@description Table columns.*/
  const columns = [
    {
			title: "№",
    	dataIndex: "number"
		},
		{
			title: LS("Name"),
    	dataIndex: "name"
		},
		{
			title: LS("Registration_date"),
    	dataIndex: "registrationDate"
		},
		{
			title: LS("Actions"),
			dataIndex: "actions",
			render: (text: any, record: any) => {
				return (
					<ActionCell />
				)
			}
		}
  ];
	let data: Array<Record<string, any>> = [];

  return (
    <div className="users-table">
			<AntTable columns={columns} dataSource={data} />
    </div>
  )
}

export default UsersTable;