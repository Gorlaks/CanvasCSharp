import React, { useEffect } from "react";
import { Table as AntTable } from "antd";
import { container } from "tsyringe";

import { LS } from "../../../../utils/helpers";
import { IUserService } from "../../interfaces";
import { IUserAuthData, ICanvasList } from "../../../common/redux/interfaces";


const Table = (props: {
	userAuthData: IUserAuthData
	canvasList: Array<ICanvasList>
}) => {
	const userService: IUserService = container.resolve("userService");

	useEffect(() => {
		const { id } = props.userAuthData;
		userService.setCanvasList(id);
	}, [])

	const columns = [
		{
			title: LS("Title"),
    	dataIndex: "title"
		},
		{
			title: LS("Last update"),
    	dataIndex: "lastUpdate"
		},
		{
			title: LS("Template type"),
    	dataIndex: "templateType"
		},
		{
			title: LS("Actions"),
    	dataIndex: "actions"
		}
	];

	let data: any = [];

	props.canvasList.map((item, index) => {
		data.push({
			key: index++,
			title: item.title,
			lastUpdate: item.date,
			templateType: item.type,
		})
	})

	return (
		<>
			<AntTable columns={columns} dataSource={data} />
		</>
	)
}

export default Table;