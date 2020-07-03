/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const makeSelectCurrentUser = () =>
  createSelector(
    selectGlobal,
    globalState => globalState,
  );

const makeSelectAuthData = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.authData,
  );

const makeSelectCustomers = () =>
  createSelector(
    selectGlobal,
    imageLabelling => imageLabelling.customers,
  );

const makeSelectLocations = () =>
  createSelector(
    selectGlobal,
    imageLabelling => imageLabelling.locations,
  );

const makeSelectDevices = () =>
  createSelector(
    selectGlobal,
    imageLabelling => imageLabelling.devices,
  );

const makeSelectStations = () =>
  createSelector(
    selectGlobal,
    imageLabelling => imageLabelling.stations,
  );

const makeSelectSensors = () =>
  createSelector(
    selectGlobal,
    imageLabelling => imageLabelling.sensors,
  );

const makeSelectFilterVals = () =>
  createSelector(
    selectGlobal,
    imageLabelling => imageLabelling.filterVals,
  );

const makeSelectProducts = () =>
  createSelector(
    selectGlobal,
    imageLabelling => imageLabelling.products,
  );

export {
  selectGlobal,
  makeSelectCurrentUser,
  makeSelectAuthData,
  makeSelectCustomers,
  makeSelectLocations,
  makeSelectDevices,
  makeSelectStations,
  makeSelectSensors,
  makeSelectFilterVals,
  makeSelectProducts,
};
