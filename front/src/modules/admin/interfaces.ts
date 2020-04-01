export interface IAdminService {

}

export interface IAdminRepository {
  getUsersList(id: string): Promise<Array<IUsers>>;
}

export interface IUsers {
  id: string;
  login: string;
  email: string;
}