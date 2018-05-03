import React from 'react';

// import filterFactory, { textFilter, Comparator } from 'react-bootstrap-table2-filter';

import { UserTypeDefs } from '../constants/userTypes';
import Styles from './Styles';

function actionFormatter(row) {
  if (!row || !row.userType) {
    return (<div />);
  }

  return (
    <div>
      <i className="fa fa-ellipsis-h" />
    </div>
  );
}

function nameContactFormatter(cell, row) {
  if (!row || !row.userType) {
    return (<div />);
  }

  let name = '';
  switch (row.userType) {
    case 'residentialCustomer':
      name = (row.firstname || row.lastname) && `${row.firstname} ${row.lastname}`;
      break;
    case 'businessCustomer':
      name = (row.contact.firstname || row.contact.lastname) && `${row.contact.firstname} ${row.contact.lastname}`;
      break;
    default:
      name = '';
      break;
  }
  return (
    <div>{name}</div>
  );
}

const columnsResidentialCustomer = [
  {
    dataField: 'id',
    text: 'ID',
  },
  {
    dataField: 'name',
    text: 'Name',
    formatter: nameContactFormatter,
  },
  {
    dataField: 'phone',
    text: 'Phone no.',
    style: Styles.truncate,
  },
  {
    dataField: 'address',
    text: 'Address',
    style: Styles.truncate,
  },
  {
    dataField: 'status',
    text: 'Status',
    style: Styles.truncate,
  },
  {
    dataField: '_id',
    text: 'Action',
    formatter: actionFormatter,
  },
];

const columnsBusinessCustomer = [
  {
    dataField: 'id',
    text: 'ID',
  },
  {
    dataField: 'businessName',
    text: 'Business Name',
    style: Styles.truncate,
  },
  {
    dataField: 'status',
    text: 'Status',
  },
  {
    dataField: 'contact.phone',
    text: 'Phone no.',
    style: Styles.truncate,
  },
  {
    dataField: 'email',
    text: 'Email',
    style: Styles.truncate,
  },
  {
    dataField: 'contact.firstname',
    text: 'Primary Contact',
    style: Styles.truncate,
    formatter: nameContactFormatter,
  },
  {
    dataField: '_id',
    text: 'Action',
    formatter: actionFormatter,
  },
];

export const columns = [
  {
    columnsDef: columnsResidentialCustomer,
    ...UserTypeDefs.residentialCustomer,
  },
  {
    columnsDef: columnsBusinessCustomer,
    ...UserTypeDefs.businessCustomer,
  },
  {
    columnsDef: columnsResidentialCustomer,
    ...UserTypeDefs.businessContractor,
  },
  {
    columnsDef: columnsResidentialCustomer,
    ...UserTypeDefs.driver,
  },
  {
    columnsDef: columnsResidentialCustomer,
    ...UserTypeDefs.handelAdmin,
  },
];
