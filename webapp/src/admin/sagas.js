import { all } from 'redux-saga/effects';
import loginSaga from './login/sagas';
import profileSaga from './profile/sagas';
import resetPasswordSaga from './resetPassword/sagas';
import studentsSaga from './manageStudents/sagas';

export default function* adminSaga() {
  yield all([
    loginSaga(),
    profileSaga(),
    resetPasswordSaga(),
    studentsSaga(),
  ]);
}
