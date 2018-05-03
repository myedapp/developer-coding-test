import React from 'react';

// import filterFactory, { textFilter, Comparator } from 'react-bootstrap-table2-filter';

import { StudentDefs } from '../constants/studentDefs';
import Styles from './Styles';

const columnsStudents = [
  {
    dataField: 'id',
    text: 'Student Code',
    style: Styles.truncate,
  },
  {
    dataField: 'fullname',
    text: 'Name',
    style: Styles.truncate,
  },
];


export const columns = [
  {
    columnsDef: columnsStudents,
    ...StudentDefs.productAdmin,
  },
];
