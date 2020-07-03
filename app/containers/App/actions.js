/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_REPOS,
  DO_LOGIN,
  LOGIN_SUCCESS,
  DO_LOGOUT,
  LOGOUT_SUCCESS,
  CHECK_AUTHENTICATION,
  FETCH_CUSTOMERS,
  FETCH_IMAGE,
  FETCH_LOCATION_FROM_CUSTOMER,
  FETCH_DEVICE_FROM_LOCATION,
  FETCH_STATIONS_FROM_DEVICES,
  FETCH_SENSORS_FROM_STATIONS,
  FETCH_IMAGE_BY_SESSION,
  SET_FILTER_VALS,
  LOADED_CUSTOMERS,
  LOADED_LOCATIONS_FROM_CUSTOMER,
  LOADED_DEVICES_FROM_LOCATION,
  LOADED_STATIONS_FROM_DEVICES,
  LOADED_SENSORS_FROM_STATIONS,
  LOADED_IMAGE,
  LOAD_IMAGE_BY_SESSION,
  LOAD_DATA,
  FETCH_PRODUCTS_BY_CUSTOMER,
  LOGIN_FAILED,
  SET_FILTER_VALS_OBJ,
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadRepos() {
  return {
    type: LOAD_REPOS,
  };
}

export function doLogin(email, pass, rememberMe, resolve) {
  return {
    type: DO_LOGIN,
    email,
    pass,
    rememberMe,
    resolve,
  };
}

export function loginSuccess(payload) {
  localStorage.setItem('authData', JSON.stringify(payload));
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
}

export function loginFailed(error) {
  return {
    type: LOGIN_FAILED,
    error,
  };
}

export function doLogout(resolve) {
  return {
    type: DO_LOGOUT,
    resolve,
  };
}

export function logoutSuccess(payload) {
  localStorage.removeItem('authData');
  return {
    type: LOGOUT_SUCCESS,
    payload,
  };
}

export function checkAuthentication() {
  return {
    type: CHECK_AUTHENTICATION,
  };
}

export function fetchCustomers() {
  return {
    type: FETCH_CUSTOMERS,
  };
}

export const fetchImage = payload => ({
  type: FETCH_IMAGE,
  payload,
});

export function fetchLocationFromCustomer(id) {
  return {
    type: FETCH_LOCATION_FROM_CUSTOMER,
    customerId: id,
  };
}

export const fetchDeviceFromLocation = id => ({
  type: FETCH_DEVICE_FROM_LOCATION,
  id,
});

export function fetchStationFromDevice(id) {
  return {
    type: FETCH_STATIONS_FROM_DEVICES,
    deviceId: id,
  };
}

export function fetchSensorFromStation(id) {
  return {
    type: FETCH_SENSORS_FROM_STATIONS,
    stationId: id,
  };
}

export const fetchImageBySession = session => ({
  type: FETCH_IMAGE_BY_SESSION,
  session,
});

export const setFilerVals = payload => {
  return {
    type: SET_FILTER_VALS,
    payload,
  };
};

export const setFilterValObj = payload => ({
  type: SET_FILTER_VALS_OBJ,
  payload,
});

export function loadedCustomers(payload) {
  return {
    type: LOADED_CUSTOMERS,
    payload,
  };
}

export function loadedLocationsFromCustomer(payload) {
  return {
    type: LOADED_LOCATIONS_FROM_CUSTOMER,
    payload,
  };
}

export const loadedDevicesFromLocation = payload => ({
  type: LOADED_DEVICES_FROM_LOCATION,
  payload,
});

export function loadedStationFromDevice(payload) {
  return {
    type: LOADED_STATIONS_FROM_DEVICES,
    payload,
  };
}

export function loadedSensorFromStation(payload) {
  return {
    type: LOADED_SENSORS_FROM_STATIONS,
    payload,
  };
}

export const loadedImage = payload => ({
  type: LOADED_IMAGE,
  payload,
});

export const loadImageBySession = payload => ({
  type: LOAD_IMAGE_BY_SESSION,
  payload,
});

export const fetchProductsByCustomer = id => {
  return {
    type: FETCH_PRODUCTS_BY_CUSTOMER,
    customerId: id,
  };
};

export const loadData = payload => ({
  type: LOAD_DATA,
  payload,
});
