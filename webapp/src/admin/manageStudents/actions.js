import { createAsyncAction } from '../../common/helpers';
import {
  GET_STUDENTS_LIST,
  GET_STUDENT_DETAILS_BY_ID,
  UPDATE_STUDENT_DETAILS,
  DELETE_STUDENTS_LIST,
  DELETE_STUDENT_BY_ID,
  SET_STUDENTS_LIST2STATE,
  SET_STUDENT_DETAILS2STATE,
  UPDATE_STUDENT_STATUS,
  CREATE_STUDENT,
  PUT_STUDENT_DETAIL2STATE,
} from './constants/actionTypes';

export const getStudentsList = createAsyncAction(GET_STUDENTS_LIST);
export const getStudentDetailsById = createAsyncAction(GET_STUDENT_DETAILS_BY_ID);
export const updateStudentDetails = createAsyncAction(UPDATE_STUDENT_DETAILS);
export const deleteStudentsList = createAsyncAction(DELETE_STUDENTS_LIST);
export const deleteStudentById = createAsyncAction(DELETE_STUDENT_BY_ID);
export const updateStudentStatusById = createAsyncAction(UPDATE_STUDENT_STATUS);

export const setStudentsList2State = createAsyncAction(SET_STUDENTS_LIST2STATE);
export const setStudentDetails2State = createAsyncAction(SET_STUDENT_DETAILS2STATE);

export const createStudent = createAsyncAction(CREATE_STUDENT);
export const putStudentDetails2State = createAsyncAction(PUT_STUDENT_DETAIL2STATE);
