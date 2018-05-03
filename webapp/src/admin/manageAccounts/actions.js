import { createAsyncAction } from '../../common/helpers';
import {
  GET_CUSTOMERS_LIST,
  GET_CUSTOMER_DETAILS_BY_ID,
  UPDATE_CUSTOMER_DETAILS,
  DELETE_CUSTOMERS_LIST,
  DELETE_CUSTOMER_BY_ID,
  SET_CUSTOMERS_LIST2STATE,
  SET_CUSTOMER_DETAILS2STATE,
  UPDATE_CUSTOMER_STATUS,
  UPDATE_CUSTOMERS_STATUS,
} from './constants/actionTypes';

export const getCustomersList = createAsyncAction(GET_CUSTOMERS_LIST);
export const getCustomerDetailsById = createAsyncAction(GET_CUSTOMER_DETAILS_BY_ID);
export const updateCustomerDetails = createAsyncAction(UPDATE_CUSTOMER_DETAILS);
export const deleteCustomersList = createAsyncAction(DELETE_CUSTOMERS_LIST);
export const deleteCustomerById = createAsyncAction(DELETE_CUSTOMER_BY_ID);
export const updateCustomerStatusById = createAsyncAction(UPDATE_CUSTOMER_STATUS);

export const setCustomersList2State = createAsyncAction(SET_CUSTOMERS_LIST2STATE);
export const setCustomerDetails2State = createAsyncAction(SET_CUSTOMER_DETAILS2STATE);

export const updateCustomersStatus = createAsyncAction(UPDATE_CUSTOMERS_STATUS);
