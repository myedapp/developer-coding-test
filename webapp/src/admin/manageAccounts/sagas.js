import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';

import { request } from '../../common/helpers';
import { setSuccess } from '../../common/actions';

import {
  GET_CUSTOMERS_LIST,
  GET_CUSTOMER_DETAILS_BY_ID,
  UPDATE_CUSTOMER_DETAILS,
  DELETE_CUSTOMERS_LIST,
  DELETE_CUSTOMER_BY_ID,
  UPDATE_CUSTOMER_STATUS,
  UPDATE_CUSTOMERS_STATUS,
} from './constants/actionTypes';

import { setCustomersList2State, setCustomerDetails2State } from './actions';

function* getCustomersList(action) {
  const { resolve, reject, payload } = action;

  try {
    const response = yield call(request, {
      url: `admin/${payload.url}?limit=${payload.limit}&page=${payload.page}`,
      method: 'get',
      requestName: 'customersList',
    });
    yield put(setCustomersList2State(response));
    resolve(response);
  } catch (error) {
    reject(error);
  }
}

function* getCustomerById(action) {
  const { resolve, reject, payload } = action;
  try {
    const response = yield call(request, {
      url: `admin/${payload.url}/${payload.uid}`,
      method: 'get',
      requestName: 'customerDetails',
    });
    yield put(setCustomerDetails2State(response));
    resolve(response);
  } catch (error) {
    reject(error);
  }
}

function* updateCustomerDetails(action) {
  const { resolve, reject, payload } = action;
  try {
    const response = yield call(request, {
      url: `admin/${payload.url}/${payload.uid}`,
      data: payload.data,
      method: 'put',
    });
    yield put(setSuccess('Customer details have been updated successfully'));

    getCustomerById(action);
    resolve(response);
  } catch (error) {
    reject(error);
  }
}

function* deleteCustomersList(action) {
  const { resolve, reject, payload } = action;
  try {
    const response = yield call(request, {
      url: `admin/${payload.url}`,
      data: payload.data,
      method: 'delete',
    });
    yield put(setSuccess('Those customers have been deleted successfully'));
    getCustomersList({ resolve, reject, payload: { limit: 10, page: 1, url: payload.url } });
    resolve(response);
  } catch (error) {
    reject(error);
  }
}

function* deleteCustomerById(action) {
  const { resolve, reject, payload } = action;
  try {
    const response = yield call(request, {
      url: `admin/${payload.url}/${payload.uid}`,
      method: 'delete',
    });
    yield put(setSuccess('This customer has been deleted successfully'));
    yield getCustomersList({ resolve, reject, payload: { limit: 10, page: 1, url: payload.url } });
    resolve(response);
  } catch (error) {
    reject(error);
  }
}

function* updateCustomerStatusById(action) {
  const { resolve, reject, payload } = action;
  try {
    const response = yield call(request, {
      url: `admin/${payload.url}/${payload.uid}/status`,
      method: 'put',
      data: { status: payload.status },
    });
    yield put(setSuccess('This customer status has been updated successfully! '));
    yield getCustomersList({ resolve, reject, payload: { limit: 10, page: 1, url: payload.url } });
    resolve(response);
  } catch (error) {
    reject(error);
  }
}

function* updateCustomersStatus(action) {
  const { resolve, reject, payload } = action;
  try {
    const response = yield call(request, {
      url: 'admin/customers/status',
      method: 'put',
      data: {
        status: payload.status,
        ids: payload.ids,
      },
    });
    yield put(setSuccess('The customers status have been updated successfully! '));
    yield getCustomersList({ resolve, reject, payload: { limit: 10, page: 1, url: payload.url } });
    resolve(response);
  } catch (error) {
    reject(error);
  }
}

export default function* accountsSaga() {
  yield takeEvery(GET_CUSTOMERS_LIST, getCustomersList);
  yield takeEvery(GET_CUSTOMER_DETAILS_BY_ID, getCustomerById);
  yield takeLatest(UPDATE_CUSTOMER_DETAILS, updateCustomerDetails);
  yield takeLatest(DELETE_CUSTOMERS_LIST, deleteCustomersList);
  yield takeLatest(DELETE_CUSTOMER_BY_ID, deleteCustomerById);
  yield takeLatest(UPDATE_CUSTOMER_STATUS, updateCustomerStatusById);
  yield takeLatest(UPDATE_CUSTOMERS_STATUS, updateCustomersStatus);
}
