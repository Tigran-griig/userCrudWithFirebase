import axios, {
  AxiosInstance,
  AxiosError,
  AxiosPromise,
} from 'axios';
import { baseConfigs } from '@/lib/index';

interface MakeRequestProps {
  postJson: (url: string, params: any) => AxiosPromise<any>;
}

class MakeRequest {
  axiosInstance: AxiosInstance;
  handleErrors: AxiosError | undefined;

  constructor(extraProps: { handleErrors?: AxiosError } = {}) {
    this.handleErrors = extraProps.handleErrors;
    this.axiosInstance = axios.create({
      baseURL: baseConfigs.connection.server_url,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  getJson(url = '', params = {}, headers = {}) {
    return this.axiosInstance.get(url, { params, headers }).then(response => {
      return response?.data;
    });
  }

  postJson<T>(url: string = '', data: T, params = {}) {
    return this.axiosInstance.post(url, data, params).then(response => response?.data);
  }

  putJson(url = '', params = {}) {
    return this.axiosInstance.put(url, params).then(response => response?.data);
  }

  deleteJson(url = '', params = {}) {
    return this.axiosInstance.delete(url, params).then(response => response?.data);
  }
}

export default MakeRequest;


//
// import axios, {
//   AxiosInstance,
//   AxiosError,
//   AxiosPromise, AxiosRequestHeaders, AxiosResponseHeaders,
// } from 'axios';
// import configs from '@/lib/index';
// import { Runtime } from "inspector";
//
// interface MakeRequestProps {
//   postJson: (url: string, params: any) => AxiosPromise<any>;
// }
//
// class MakeRequest {
//   axiosInstance: AxiosInstance;
//   handleErrors: AxiosError | undefined;
//   addHeaderParams?: AxiosResponseHeaders z;
//   currentExecutingRequests: ;
//
//   constructor(extraProps: { handleErrors?: AxiosError } = {}) {
//     this.handleErrors = extraProps.handleErrors;
//     this.addHeaderParams = extraProps?.addHeaderParams;
//     this.currentExecutingRequests = {};
//     this.axiosInstance = axios.create({
//       baseURL: configs.connection.server_url,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     this.axiosInstance.interceptors.response.use(response => {
//       if (this.currentExecutingRequests[response.request.responseURL]) {
//         delete this.currentExecutingRequests[response.request.responseURL];
//       }
//       return response;
//     }, (error) => {
//       const { config, response } = error;
//       const originalRequest = config;
//
//       if (axios.isCancel(error)) {
//         return new Promise(() => {
//         });
//       }
//
//       if (this.currentExecutingRequests[originalRequest?.url]) {
//         delete this.currentExecutingRequests[originalRequest?.url];
//       }
//       this.handleErrors?.(response);
//       return Promise.reject({ error });
//     });
//
//     this.axiosInstance.interceptors.request.use(req => {
//         let originalRequest = req;
//         if (this.currentExecutingRequests[req?.url + JSON.stringify(req?.params)]) {
//           const source = this.currentExecutingRequests[req?.url + JSON.stringify(req?.params)];
//           delete this.currentExecutingRequests[req?.url + JSON.stringify(req?.params)];
//           source.cancel();
//         }
//
//         const CancelToken = axios.CancelToken;
//         const source = CancelToken.source();
//         originalRequest.cancelToken = source.token;
//         this.currentExecutingRequests[req?.url + JSON.stringify(req?.params)] = source;
//
//         req.headers = {
//           ...req.headers,
//           ...(this.addHeaderParams?.() || {})
//         };
//         return originalRequest;
//       },
//       err => {
//         this.handleErrors?.(err);
//         return Promise.reject(err);
//       }
//     );
//   }
//
//   getJson(url = '', params = {}, headers = {})
//   {
//     return this.axiosInstance.get(url, { params, headers }).then(response => {
//       return response?.data;
//     });
//   }
//
//   postJson<T>(url
//     :
//     string = '', data
//     :
//     T, params = {}
//   )
//   {
//     return this.axiosInstance.post(url, data, params).then(response => response?.data);
//   }
//
//   putJson(url = '', params = {})
//   {
//     return this.axiosInstance.put(url, params).then(response => response?.data);
//   }
//
//   deleteJson(url = '', params = {})
//   {
//     return this.axiosInstance.delete(url, params).then(response => response?.data);
//   }
// }
//
// export default MakeRequest;
