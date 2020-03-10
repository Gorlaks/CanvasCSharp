import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Table as AntTable, message } from "antd";
import { container } from "tsyringe";

import { LS } from "../../../../utils/helpers";
import { RoutePath } from "../../../../utils/constants";
import { IUserService } from "../../interfaces";
import { ICanvasService } from "../../../canvas/interfaces";
import { IUserAuthData, ICanvasList } from "../../../common/redux/interfaces";
import { ILocalStorageApi } from "../../../common/storage/interfaces";


const Table = (props: {
	userAuthData: IUserAuthData
	canvasList: Array<ICanvasList>
}) => {
	const history = useHistory();
	const userService: IUserService = container.resolve("userService");
	const canvasService: ICanvasService = container.resolve("canvasService");
	const localStorageApi: ILocalStorageApi = container.resolve("localStorageApi");

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
					<div className="user__table__actions">
						<button className="user__table__action-btn" onClick={() => {
							localStorageApi.setLocalData("canvasId", record.id);
							const canvasId = localStorageApi.getLocalData("canvasId", null);
							if(!canvasId) message.error(LS("Id is not found"));
							else history.push(RoutePath.CANVAS_PATH)
						}}>{LS("Edit")}</button>

						<div className="user__table__actions-separator"></div>

						<button className="user__table__action-btn" onClick={() => {
							const loading = message.loading(LS("Loading"));
							canvasService.deleteCanvas(props.userAuthData.id, record.id)
							.then((item: {id: string}) => {
								canvasService.setCanvasListAfterRemoving(item.id);
							})
							.catch(() => message.error(LS("Something_went_wrong")))
							.finally(() => loading());
						}}>
							{LS("Delete")}
						</button>
					</div>
				)
			}
		}
	];

	let data: Array<Record<string, any>> = [];

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