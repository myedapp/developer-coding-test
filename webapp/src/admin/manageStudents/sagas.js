import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';

import { request } from '../../common/helpers';
import { setSuccess } from '../../common/actions';

import {
  GET_STUDENTS_LIST,
  GET_STUDENT_DETAILS_BY_ID,
  UPDATE_STUDENT_DETAILS,
} from './constants/actionTypes';

import { setStudentsList2State, putStudentDetails2State } from './actions';

function* getStudentsList(action) {
  const { resolve, reject, payload } = action;

  try {
    const response = yield call(request, {
      url: `admin/${payload.url}?limit=${payload.limit}&page=${payload.page}`,
      method: 'get',
      requestName: 'studentsList',
    });
    yield put(setStudentsList2State(response));
    resolve(response);
  } catch (error) {
    reject(error);
  }
}

function* getStudentById(action) {
  const { resolve, reject, payload } = action;

  try {
    const response = yield call(request, {
      url: `admin/${payload.url}/${payload.uid}`,
      method: 'get',
      requestName: 'studentDetails',
    });
    yield put(putStudentDetails2State(response));
    resolve(response);
  } catch (error) {
    reject(error);
  }
}

function* updateStudentDetails(action) {
  const { resolve, reject, payload } = action;
  try {
    const response = yield call(request, {
      url: `admin/${payload.url}/${payload.uid}`,
      data: payload.data,
      method: 'put',
    });
    yield put(setSuccess('Student details have been updated successfully'));

    getStudentById(action);
    resolve(response);
  } catch (error) {
    reject(error);
  }
}


export default function* studentsSaga() {
  yield takeEvery(GET_STUDENTS_LIST, getStudentsList);
  yield takeEvery(GET_STUDENT_DETAILS_BY_ID, getStudentById);
  yield takeLatest(UPDATE_STUDENT_DETAILS, updateStudentDetails);
}
