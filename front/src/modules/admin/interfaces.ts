import { ICanvasBlocksData } from "../canvas/interfaces";

export interface IAdminService {

}

export interface IAdminRepository {
  getUsersList(id: string): Promise<Array<IUsers>>;
  getCanvasTemplateList(id: string): Promise<any>;
}

export interface IUsers {
  id: string;
  login: string;
  email: string;
}

export interface ICanvasTemplate {
  id: string;
  type: string;
  rows: number;
  columns: number;
  data: Array<ICanvasBlocksData>
}