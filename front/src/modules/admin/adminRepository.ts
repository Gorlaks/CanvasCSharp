import { IAdminRepository } from "./interfaces";
import { IApiClient } from "../common/apiClient/interfaces";

class AdminRepository implements IAdminRepository{
  private apiClient: IApiClient;

  constructor(apiClient: IApiClient) {
    this.apiClient = apiClient;
  }

  async getUsersList(id: string) {
    const answer = await this.apiClient.sendRequest({ id }, "/admin/getUsers")
    return answer;
  }
}

export default AdminRepository;