import React from "react";
import { Table as AntTable } from "antd";

import { LS } from "../../../../utils/helpers";


const Table = () => {

	const columns = [
		{
			title: LS("Title"),
    	dataIndex: "Title"
		},
		{
			title: LS("Last update"),
    	dataIndex: "Last update"
		},
		{
			title: LS("Template type"),
    	dataIndex: "Title"
		},
		{
			title: LS("Actions"),
    	dataIndex: "Actions"
		}
	]

	return (
		<>
			<AntTable columns={columns} />
		</>
	)
}

export default Table;