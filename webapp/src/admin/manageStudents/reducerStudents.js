import { combineReducers } from 'redux';

import {
  SET_STUDENTS_LIST2STATE,
  SET_STUDENT_DETAILS2STATE,
  GET_STUDENT_DETAILS_BY_ID,
  PUT_STUDENT_DETAIL2STATE,
} from './constants/actionTypes';

/* eslint no-case-declarations: 0 */

const initialStudentsState = {
  data: [],
  pagination: {
    currentPage: 1,
    pageCount: 1,
    perPage: 10,
    totalCount: 1,
  },
};

function students(state = initialStudentsState, action) {
  switch (action.type) {
    case SET_STUDENTS_LIST2STATE:
      const { data, headers } = action.payload;
      const newStudents = {
        data,
        pagination: {
          currentPage: headers['x-pagination-current-page'] >> 0,
          pageCount: headers['x-pagination-page-count'] >> 0,
          perPage: headers['x-pagination-per-page'] >> 0,
          totalCount: headers['x-pagination-total-count'] >> 0,
        },
      };

      return { ...state, ...newStudents };
    case SET_STUDENT_DETAILS2STATE:
      return { ...state, student: action.payload.data };
    case GET_STUDENT_DETAILS_BY_ID:
      return { ...state, student: action.payload.data };
    case PUT_STUDENT_DETAIL2STATE:
      return { ...state, student: action.payload.data };
    default:
      return state;
  }
}

export default combineReducers({
  students,
});
