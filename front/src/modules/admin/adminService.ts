import { IAdminService } from "./interfaces";
import { IApiClient } from "../common/apiClient/interfaces";

class AdminService implements IAdminService {
  private apiClient: IApiClient;

  constructor(apiClient: IApiClient) {
    this.apiClient = apiClient;
  }

  
}

export default AdminService;