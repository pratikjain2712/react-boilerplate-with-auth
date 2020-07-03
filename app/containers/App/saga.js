/**
 * Gets the repositories of the user from Github
 */

import { call, all, put, takeLatest } from 'redux-saga/effects';
import {
  loginSuccess,
  logoutSuccess,
  loadedCustomers,
  loadedLocationsFromCustomer,
  loadedDevicesFromLocation,
  loadedStationFromDevice,
  loadedSensorFromStation,
  loadedImage,
  loadImageBySession,
  loadData,
  loginFailed,
} from './actions';

import {
  DO_LOGIN,
  DO_LOGOUT,
  CHECK_AUTHENTICATION,
  FETCH_CUSTOMERS,
  FETCH_LOCATION_FROM_CUSTOMER,
  FETCH_DEVICE_FROM_LOCATION,
  FETCH_STATIONS_FROM_DEVICES,
  FETCH_SENSORS_FROM_STATIONS,
  FETCH_IMAGE,
  FETCH_IMAGE_BY_SESSION,
  FETCH_PRODUCTS_BY_CUSTOMER,
} from './constants';

import {
  fetchRepoLogin,
  fetchRepoLogout,
  fetchCheckAuth,
  fetchCustomersRepo,
  fetchLocationsFromCustomerRepo,
  fetchDevicesFromLocationRepo,
  fetchStationsFromDevicesRepo,
  fetchSensorsFromStationsRepo,
  getImageDoc,
  fetchImageBySession,
  getProductsList,
} from './serviceCalls';

/**
 * Github repos request/response handler
 */
export function* doLogin(data) {
  // Select username from store
  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(fetchRepoLogin, data);
    if (repos.status === 200) {
      // yield put(loginFailed(''));
      yield put(loginSuccess(repos.data));
      data.resolve();
    }
  } catch (err) {
    yield put(loginFailed('Invalid username or Password'));
    // yield put(repoLoadingError(err));
  }
}

export function* doLogout(data) {
  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(fetchRepoLogout);
    if (repos.status === 200) {
      data.resolve();
    }
    yield put(logoutSuccess(repos));
  } catch (err) {
    console.log(err);
    // yield put(repoLoadingError(err));
  }
}

export function* checkAuthentication() {
  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(fetchCheckAuth);
    console.log(repos, 'repos');
    if (repos.status === 200) {
      console.log(repos);
    }
    // yield put(logoutSuccess(repos));
  } catch (err) {
    console.log(err);
    // yield put(repoLoadingError(err));
  }
}

export function* fetchCustomers() {
  try {
    const repos = yield call(fetchCustomersRepo);
    yield put(loadedCustomers(repos.data.customers));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
}

export function* fetchLocationFromCustomer(action) {
  const { customerId } = action;
  try {
    const repos = yield call(fetchLocationsFromCustomerRepo, customerId);
    yield put(loadedLocationsFromCustomer(repos.data.locations));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
}

export function* fetchDeviceFromLocation(action) {
  const { id } = action;
  const locationId = id;
  try {
    const repos = yield call(fetchDevicesFromLocationRepo, locationId);
    yield put(loadedDevicesFromLocation(repos.data.device));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
}

export function* fetchStationFromDevice(action) {
  const { deviceId } = action;
  try {
    const repos = yield call(fetchStationsFromDevicesRepo, deviceId);
    yield put(loadedStationFromDevice(repos.data.stations));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
}

export function* fetchSensorFromStation(action) {
  const { stationId } = action;
  try {
    const repos = yield call(fetchSensorsFromStationsRepo, stationId);
    yield put(loadedSensorFromStation(repos.data.sensors));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
}

export function* getImage(obj) {
  try {
    const repos = yield call(getImageDoc, obj);
    yield put(loadedImage(repos.data));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
}

export function* getImageBySession(session) {
  try {
    const res = yield call(fetchImageBySession, session);
    yield put(loadImageBySession(res.data.products));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err, 'err');
  }
}

export function* getProductsByCustomer(payload) {
  try {
    const res = yield call(getProductsList, payload.customerId);
    if (res.status === 200) {
      yield put(loadData({ key: 'products', products: res.data.product }));
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err, 'err');
  }
}
export default function* rootSaga() {
  yield all([
    takeLatest(DO_LOGIN, doLogin),
    takeLatest(DO_LOGOUT, doLogout),
    takeLatest(CHECK_AUTHENTICATION, checkAuthentication),
    takeLatest(FETCH_CUSTOMERS, fetchCustomers),
    takeLatest(FETCH_LOCATION_FROM_CUSTOMER, fetchLocationFromCustomer),
    takeLatest(FETCH_DEVICE_FROM_LOCATION, fetchDeviceFromLocation),
    takeLatest(FETCH_STATIONS_FROM_DEVICES, fetchStationFromDevice),
    takeLatest(FETCH_SENSORS_FROM_STATIONS, fetchSensorFromStation),
    takeLatest(FETCH_IMAGE, getImage),
    takeLatest(FETCH_IMAGE_BY_SESSION, getImageBySession),
    takeLatest(FETCH_PRODUCTS_BY_CUSTOMER, getProductsByCustomer),
  ]);
}
