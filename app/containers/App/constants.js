/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_REPOS = 'boilerplate/App/LOAD_REPOS';
export const LOAD_REPOS_SUCCESS = 'boilerplate/App/LOAD_REPOS_SUCCESS';
export const DO_LOGIN = 'boilerplate/App/DO_LOGIN';
export const LOGIN_SUCCESS = 'boilerplate/App/LOGIN_SUCCESS';
export const DO_LOGOUT = 'boilerplate/App/DO_LOGOUT';
export const LOGOUT_SUCCESS = 'boilerplate/App/LOGOUT_SUCCESS';
export const CHECK_AUTHENTICATION = 'boilerplate/App/CHECK_AUTHENTICATION';
export const FETCH_CUSTOMERS = 'boilerplate/App/FETCH_CUSTOMERS';
export const FETCH_IMAGE = 'boilerplate/App/FETCH_IMAGE';
export const FETCH_LOCATION_FROM_CUSTOMER =
  'boilerplate/App/FETCH_LOCATION_FROM_CUSTOMER';
export const FETCH_DEVICE_FROM_LOCATION =
  'boilerplate/App/FETCH_DEVICE_FROM_LOCATION';
export const FETCH_STATIONS_FROM_DEVICES = 'FETCH_STATIONS_FROM_DEVICES';
export const FETCH_SENSORS_FROM_STATIONS = 'FETCH_SENSORS_FROM_STATIONS';
export const FETCH_IMAGE_BY_SESSION = 'FETCH_IMAGE_BY_SESSION';
export const SET_FILTER_VALS = 'boilerplate/App/SET_FILTER_VALS';
export const LOADED_CUSTOMERS = 'boilerplate/App/LOADED_CUSTOMERS';
export const LOADED_LOCATIONS_FROM_CUSTOMER =
  'boilerplate/App/LOADED_LOCATIONS_FROM_CUSTOMER';
export const LOADED_DEVICES_FROM_LOCATION =
  'boilerplate/App/LOADED_DEVICES_FROM_LOCATION';
export const LOADED_STATIONS_FROM_DEVICES = 'LOADED_STATIONS_FROM_DEVICES';
export const LOADED_SENSORS_FROM_STATIONS = 'LOADED_SENSORS_FROM_STATIONS';
export const LOADED_IMAGE = 'LOADED_IMAGE';
export const LOAD_IMAGE_BY_SESSION = 'LOAD_IMAGE_BY_SESSION';
export const FETCH_PRODUCTS_BY_CUSTOMER = 'FETCH_PRODUCTS_BY_CUSTOMER';
export const LOAD_DATA = 'LOAD_DATA';
export const LOGIN_FAILED = 'boilerplate/App/LOGIN_FAILED';
export const SET_FILTER_VALS_OBJ = 'SET_FILTER_VALS_OBJ';
