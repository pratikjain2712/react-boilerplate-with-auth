/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  LOAD_REPOS_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOADED_CUSTOMERS,
  LOADED_LOCATIONS_FROM_CUSTOMER,
  LOADED_DEVICES_FROM_LOCATION,
  LOADED_STATIONS_FROM_DEVICES,
  LOADED_SENSORS_FROM_STATIONS,
  LOADED_IMAGE,
  LOAD_IMAGE_BY_SESSION,
  SET_FILTER_VALS,
  LOAD_DATA,
  LOGIN_FAILED,
  SET_FILTER_VALS_OBJ,
} from './constants';

// The initial state of the App
// export const initialState = {
//   loading: false,
//   error: false,
//   currentUser: false,
//   perPage: {
//     itemPerPage: 45,
//     cardsPerRow: 5,
//   }
// };

export const initialState = {
  loading: false,
  products: [],
};

/* eslint-disable default-case, no-param-reassign */
const globalReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_REPOS_SUCCESS:
        draft.userData = action.payload;
        draft.loading = false;
        break;
      case LOGIN_SUCCESS:
        draft.authData = action.payload;
        break;
      case LOGOUT_SUCCESS:
        draft.authData = null;
        break;
      case LOADED_CUSTOMERS:
        draft.customers = action.payload;
        break;
      case LOADED_LOCATIONS_FROM_CUSTOMER:
        draft.locations = action.payload;
        break;
      case LOADED_DEVICES_FROM_LOCATION:
        draft.devices = action.payload;
        break;
      case LOADED_STATIONS_FROM_DEVICES:
        draft.stations = action.payload;
        break;
      case LOADED_SENSORS_FROM_STATIONS:
        draft.sensors = action.payload;
        break;
      case LOADED_IMAGE:
        draft.imageDoc = action.payload;
        break;
      case LOAD_IMAGE_BY_SESSION:
        draft.imageDoc = action.payload;
        break;
      case SET_FILTER_VALS:
        draft.filterVals = action.payload;
        break;
      case SET_FILTER_VALS_OBJ:
        draft.filterValsObj = action.payload;
        break;
      case LOAD_DATA:
        draft[action.payload.key] = action.payload.products;
        break;
      case LOGIN_FAILED: {
        draft.authData = action.error;
      }
    }
  });

export default globalReducer;
