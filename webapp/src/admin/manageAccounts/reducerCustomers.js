import { combineReducers } from 'redux';

import {
  SET_CUSTOMERS_LIST2STATE,
  SET_CUSTOMER_DETAILS2STATE,
} from './constants/actionTypes';

/* eslint no-case-declarations: 0 */

const initialCustomersState = {
  data: [],
  pagination: {
    currentPage: 1,
    pageCount: 1,
    perPage: 10,
    totalCount: 1,
  },
};

function customers(state = initialCustomersState, action) {
  switch (action.type) {
    case SET_CUSTOMERS_LIST2STATE:
      const { data, headers } = action.payload;
      const newCustomers = {
        data,
        pagination: {
          currentPage: headers['x-pagination-current-page'] >> 0,
          pageCount: headers['x-pagination-page-count'] >> 0,
          perPage: headers['x-pagination-per-page'] >> 0,
          totalCount: headers['x-pagination-total-count'] >> 0,
        },
      };

      return { ...state, ...newCustomers };
    case SET_CUSTOMER_DETAILS2STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default combineReducers({
  customers,
});
