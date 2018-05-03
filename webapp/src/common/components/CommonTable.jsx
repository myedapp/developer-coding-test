import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import PropTypes from 'prop-types';

import InnerSearch from './InnerSearch';
import Pagination from './Pagination';

/* eslint react/prop-types: 0 */
/* eslint react/require-default-props: 0 */


const defaultStyle = {
  tableBox: {
    background: '#fff', margin: '0px 0px', padding: '10px 5px',
  },
  table: {
    borderLeft: '1px solid transparent',
    borderRight: '1px solid transparent',
  },
  title: { marginBottom: 20, color: '#045196', fontWeight: 600 },
  search: {
    position: 'relative',
    float: 'right',
    marginTop: '-24px',
    backgroundColor: '#F6F6F6',
  },
  searchRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};

const CommonPaginationComponent = props => (
  <div style={{ textAlign: 'right' }}>
    <Pagination page={props.page} pageCount={props.pages} onChange={props.onPageChange} />
  </div>
);

const EmptyComponent = () => (<div />);

const CommonTable = (props) => {
  const { styles } = props;

  let { paginationFlag } = props;
  if (!paginationFlag) {
    paginationFlag = false;
  }

  return (
    <div style={(styles && styles.tableBox) ? styles.tableBox : defaultStyle.tableBox}>
      <div className="common-table-box">
        <h3 className="text-center " style={(styles && styles.title) ? { ...defaultStyle.title, ...styles.title } : defaultStyle.title}>
          {props.title}
        </h3>
        <div id="search-box" style={(styles && styles.search) ? { ...defaultStyle.search, ...styles.search } : defaultStyle.search} />
        <div style={(styles && styles.searchRow) ? { ...defaultStyle.searchRow, ...styles.searchRow } : defaultStyle.searchRow}>
          <InnerSearch />
          {props.children}
        </div>
      </div>

      <ReactTable
        style={
          (styles && styles.table) ? {
            ...defaultStyle.table,
            ...styles.table,
          } : defaultStyle.table
        }
        data={props.data}
        columns={props.columns}
        defaultPageSize={props.pageSize || 10}
        resizable={false}
        showPageSizeOptions={false}
        getTrProps={props.getTrProps}
        PaginationComponent={paginationFlag ? (EmptyComponent) : CommonPaginationComponent}
      />
    </div>

  );
};

CommonTable.propTypes = {
  styles: PropTypes.shape({
    tableBox: PropTypes.any,
    title: PropTypes.any,
    search: PropTypes.any,
    table: PropTypes.any,
  }),
  title: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
  paginationFlag: PropTypes.bool,
  pageSize: PropTypes.number,
  getTrProps: PropTypes.func,
};

export default CommonTable;
