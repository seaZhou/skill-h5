import axios from 'axios';
import type { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios';
interface InterceptorHooks {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor?: (response: AxiosResponse) => AxiosResponse;
  responseInterceptorCatch?: (error: any) => any;
}

interface HPRequestConfig extends AxiosRequestConfig {
  interceptorHooks?: InterceptorHooks;
  showLoading?: boolean; // 是否需要显示loading
}

interface HPData<T> {
  data: T;
  returnCode: string;
  success: boolean;
}
class HPRequest {
  config: AxiosRequestConfig;
  interceptorHooks?: InterceptorHooks;
  showLoading: boolean;
  instance: AxiosInstance;
  constructor(options: HPRequestConfig) {
    this.config = options;
    this.interceptorHooks = options.interceptorHooks;
    this.showLoading = options.showLoading ?? true;
    this.instance = axios.create(options);
    this.setupIntercetor();
  }
  setupIntercetor(): void {
    this.instance.interceptors.request.use(this.interceptorHooks?.requestInterceptor, this.interceptorHooks?.requestInterceptorCatch);
    this.instance.interceptors.response.use(this.interceptorHooks?.responseInterceptor, this.interceptorHooks?.responseInterceptor);

    this.instance.interceptors.request.use((config) => {
      return config;
    });

    this.instance.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        return error;
      },
    );
  }

  request<T = any>(config: HPRequestConfig): Promise<T> {
    if (!config.showLoading) {
      this.showLoading = false;
    }
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, HPData<T>>(config)
        .then((res) => {
          resolve(res.data);
          this.showLoading = true;
        })
        .catch((error) => {
          reject(error);
          this.showLoading = true;
        });
    });
  }

  get<T = any>(config: HPRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'GET' });
  }

  post<T = any>(config: HPRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'POST' });
  }

  delete<T = any>(config: HPRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'DELETE' });
  }

  patch<T = any>(config: HPRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'PATCH' });
  }
}
export default HPRequest;
