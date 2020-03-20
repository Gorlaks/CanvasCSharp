import React, { useEffect } from "react";
import { Table as AntTable } from "antd";
import { container } from "tsyringe";

import { LS } from "../../../../utils/helpers";
import { IUserService } from "../../interfaces";
import { IUserAuthData, ICanvasList } from "../../../common/redux/interfaces";
import ActionCell from "./actionCell";


const Table = (props: {
	userAuthData: IUserAuthData
	canvasList: Array<ICanvasList>
}) => {
	const userService: IUserService = container.resolve("userService");

	/**
	 * @description Make a request to the server for canvas list of current user
	 * and put received information to redux store.
	*/
	useEffect(() => {
		const { id } = props.userAuthData;
		userService.setCanvasList(id);
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
			<AntTable columns={columns} dataSource={data} />
		</div>
	)
}

export default Table;