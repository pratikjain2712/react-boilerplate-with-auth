// import axios from 'axios';
import ApiService from '../../utils/apiService';
import { getConfig } from '../../config/apiConfig';

export async function fetchRepoLogin(data) {
  const fetchQuotesConfig = getConfig('Auth.getAuthentication');
  fetchQuotesConfig.data = {
    email: data.email,
    password: data.pass,
  };

  const apiInstance = new ApiService(fetchQuotesConfig);
  return apiInstance.call();
}

export async function fetchRepoLogout() {
  const fetchQuotesConfig = getConfig('Auth.getLogout');

  const apiInstance = new ApiService(fetchQuotesConfig);
  return apiInstance.call();
}

export async function fetchCheckAuth() {
  const fetchQuotesConfig = getConfig('Auth.checkAuth');

  const apiInstance = new ApiService(fetchQuotesConfig);
  return apiInstance.call();
}

export async function fetchCustomersRepo() {
  const fetchQuotesConfig = getConfig('MlTools.getCustomers');

  // fetchQuotesConfig.pathVariables = {
  //   username: request,
  // };
  const apiInstance = new ApiService(fetchQuotesConfig);
  return apiInstance.call();
}

export async function fetchLocationsFromCustomerRepo(customerId) {
  const fetchQuotesConfig = getConfig('MlTools.getLocationsFromCustomer');
  fetchQuotesConfig.pathVariables = {
    customerId,
  };

  const apiInstance = new ApiService(fetchQuotesConfig);
  return apiInstance.call();
}

export async function fetchDevicesFromLocationRepo(locationId) {
  const fetchQuotesConfig = getConfig('MlTools.getDevicesFromLocation');
  fetchQuotesConfig.pathVariables = {
    locationId,
  };

  const apiInstance = new ApiService(fetchQuotesConfig);
  return apiInstance.call();
}

export const fetchStationsFromDevicesRepo = async deviceId => {
  const fetchQuotesConfig = getConfig('MlTools.getStationsFromDevices');
  fetchQuotesConfig.pathVariables = {
    deviceId,
  };

  const apiInstance = new ApiService(fetchQuotesConfig);
  return apiInstance.call();
};

export const fetchSensorsFromStationsRepo = async stationId => {
  const fetchQuotesConfig = getConfig('MlTools.getSensorsFromStations');
  fetchQuotesConfig.pathVariables = {
    stationId,
  };

  const apiInstance = new ApiService(fetchQuotesConfig);
  return apiInstance.call();
};

export async function getImageDoc(obj) {
  const {
    customer,
    location,
    device,
    station,
    startTime,
    endTime,
    status,
    limit,
    page_no,
  } = obj.payload;
  const reReviewed = status;
  const fetchQuotesConfig = getConfig('MlTools.getImage');
  fetchQuotesConfig.urlParams = {
    ...(customer ? { customer: `["${customer}"]` } : undefined),
    ...(location ? { location: `["${location}"]` } : undefined),
    ...(device ? { device: `["${device}"]` } : undefined),
    ...(station ? { station: `["${station}"]` } : undefined),
    ...(startTime ? { startTime } : undefined),
    ...(endTime ? { endTime } : undefined),
    ...(reReviewed ? { reReviewed } : undefined),
    limit,
    page_no,
  };

  const apiInstance = new ApiService(fetchQuotesConfig);
  return apiInstance.call();
}

export async function fetchImageBySession(payload) {
  const { session } = payload;
  const fetchQuotesConfig = getConfig('MlTools.getLabellingImageBySession');
  fetchQuotesConfig.pathVariables = {
    session,
  };
  const apiInstance = new ApiService(fetchQuotesConfig);
  return apiInstance.call();
}

export const getProductsList = async customerId => {
  const fetchQuotesConfig = getConfig('MlTools.getProductsByCustomer');
  fetchQuotesConfig.pathVariables = {
    customerId,
  };
  const apiInstance = new ApiService(fetchQuotesConfig);
  const res = apiInstance.call();
  return res;
};
