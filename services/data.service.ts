import MakeRequest from '../api/makeRequest';
import axios, { AxiosInstance } from "axios";
import { adminConfigs } from "@/lib/index";

class DataService extends MakeRequest {
  constructor() {
    super({});
    this.axiosInstance = axios.create({
      baseURL: adminConfigs.connection.server_url,
      headers: {
        'Content-Type': 'application/json',
      },
    });

  }

  getData(url: string, params = {}) {
    return this.getJson(url, params)
      .then(response => {
        return Promise.resolve(response);
      })
      .catch(error => Promise.reject(error));
  }

}

export default new DataService();
