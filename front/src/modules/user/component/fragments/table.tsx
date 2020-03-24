import React, { useEffect, useState } from "react";
import { Table as AntTable } from "antd";
import { container } from "tsyringe";

import { LS } from "../../../../utils/helpers";
import { IUserService, ICanvasList } from "../../interfaces";
import ActionCell from "./actionCell";
import ComponentLoading from "../../../../assets/ui/componentLoading/componentLoading";
import { IUserAuthData } from "../../../auth/interfaces";


const Table = (props: {
	userAuthData: IUserAuthData
	canvasList: Array<ICanvasList>
}) => {
	const userService: IUserService = container.resolve("userService");
	const [tableLoading, setTableLoading] = useState(true);

	/**
	 * @description Make a request to the server for canvas list of current user
	 * and put received information to redux store.
	*/
	useEffect(() => {
		const { id } = props.userAuthData;
		userService.setCanvasList(id)
		.finally(() => setTableLoading(false));
	}, [])

	/**@description Table columns.*/
	const columns = [
		{
			title: LS("Title"),
    	dataIndex: "title"
		},
		{
			title: LS("Last_update"),
    	dataIndex: "lastUpdate"
		},
		{
			title: LS("Template_type"),
    	dataIndex: "templateType"
		},
		{
			title: LS("Actions"),
			dataIndex: "actions",
			render: (text: any, record: any) => {
				return (
					<ActionCell
						userAuthData={props.userAuthData}
						record={record}
					/>
				)
			}
		}
	];

	let data: Array<Record<string, any>> = [];

	/** @description Filling the table with canvas list data. */
	props.canvasList.length && props.canvasList.map((item, index) => {
		data.push({
			key: index++,
			id: item.id,
			title: item.title,
			lastUpdate: item.date,
			templateType: item.type,
		})
	})

	return (
		<div className="user__table">
			{!tableLoading ? <AntTable columns={columns} dataSource={data} /> : <ComponentLoading />}
		</div>
	)
}

export default Table;