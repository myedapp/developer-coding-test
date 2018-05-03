import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import common from './common/reducers';
import admin from './admin/reducers';

export default combineReducers({
  common,
  admin,
  router: routerReducer,
  form: formReducer,
});
