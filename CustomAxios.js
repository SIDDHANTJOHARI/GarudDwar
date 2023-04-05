import axios from 'axios';
import { Platform } from 'react-native';
import RNDeviceInfo, { getUniqueId } from 'react-native-device-info';
import { eventRef } from './eventRef';
const CustomAxios = axios.create({baseURL:eventRef?.current?.baseURL});
const requestHandler = async request => {
  request.headers.post['Content-Type'] = 'application/json';
  request.headers.common.OS = Platform.OS;
  request.headers.common.MODE = 'MOBILE_APP';
  request.headers.common.APPVERSION = RNDeviceInfo.getVersion();
  request.headers.common.APPPACKAGENAME = RNDeviceInfo.getBundleId();
  request.headers.common.DEVICEID = getUniqueId();
  return request;
};
const responseHandler = response => {

  return response;
};
const errorHandler = error => {
  return Promise.reject(error);
};
CustomAxios.interceptors.request.use(
  request => requestHandler(request),
  (error) => errorHandler(error),
);
CustomAxios.interceptors.response.use(
  request => responseHandler(request),
  error => errorHandler(error),
);
export default CustomAxios;
