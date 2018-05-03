import React from 'react';

import { string, bool, array, number, shape, func, any } from 'prop-types';
import BootstrapTable from 'react-bootstrap-table-next';
// import paginationFactory from 'react-bootstrap-table2-paginator';
// import filterFactory, { textFilter, Comparator } from 'react-bootstrap-table2-filter';
import overlayFactory from 'react-bootstrap-table2-overlay';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import InnerSearch from './InnerSearch';
import Pagination from './Pagination';

/* eslint react/prop-types: 0 */
/* eslint react/require-default-props: 0 */
/* eslint no-unused-expressions: 0 */


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
  headerBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 15px',
  },
};

const defaultSelectRow = {
  mode: 'checkbox',
  clickToSelect: true,
  style: { backgroundColor: '#c8e6c9' },
};

class RemoteAll extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnSelect = this.handleOnSelect.bind(this);
    this.handleOnSelectAll = this.handleOnSelectAll.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleOnSelect(row, isSelect) {
    this.props.handleOnSelect && this.props.handleOnSelect(row, isSelect);
  }

  handleOnSelectAll(isSelect, rows) {
    this.props.handleOnSelectAll && this.props.handleOnSelectAll(isSelect, rows);
  }

  onChange(e) {

  }

  render() {
    const {
      data, onTableChange, loading,
      columns, selectRow = defaultSelectRow,
    } = this.props;
    const selectRowSet = {
      ...defaultSelectRow,
      ...selectRow,
      onSelect: this.handleOnSelect,
      onSelectAll: this.handleOnSelectAll,
    };

    return (
      <div>
        <BootstrapTable
          remote={{ pagination: false, sort: true, filter: false }}
          keyField="id"
          data={data}
          columns={columns}
          selectRow={selectRowSet}
          // filter={filterFactory()}
          // pagination={paginationFactory({ page, sizePerPage, totalSize })}
          onTableChange={onTableChange}
          onChange={this.onChange}
          striped
          hover
          condensed
          bordered={false}
          loading={loading}
          overlay={overlayFactory({ spinner: true, background: 'rgba(192,192,192,0.3)' })}
          noDataIndication="Dataset is Empty"
        />
      </div>
    );
  }
}

RemoteAll.propTypes = {
  data: array.isRequired,
  columns: array.isRequired,
  onTableChange: func.isRequired,
  handleOnSelect: func,
  handleOnSelectAll: func,
};

const CommonBSTable = (props) => {
  const {
    styles, loading, tableData, columns, selectRow, perPage = 10,
    title, children,
    handleTableChange, handlePageChange, handlePerPageChange,
    handleOnSelect, handleOnSelectAll,
  } = props;

  return (
    <div>
      <div style={(styles && styles.tableBox) ? styles.tableBox : defaultStyle.tableBox}>
        <div className="common-table-box">
          <div style={(styles && styles.headerBox) ?
              { ...defaultStyle.headerBox, ...styles.headerBox } :
              defaultStyle.headerBox
            }
          >
            <h3 className="text-left " style={(styles && styles.title) ? { ...defaultStyle.title, ...styles.title } : defaultStyle.title}>
              {title}
            </h3>
            <div id="search-box" style={(styles && styles.search) ? { ...defaultStyle.search, ...styles.search } : defaultStyle.search} />
            <div style={(styles && styles.searchRow) ?
              { ...defaultStyle.searchRow, ...styles.searchRow } :
              defaultStyle.searchRow}
            >
              <InnerSearch />
              {children}
            </div>
          </div>
        </div>
        <RemoteAll
          loading={loading}
          data={tableData.data}
          columns={columns}
          selectRow={selectRow}
          page={tableData.pagination.currentPage}
          sizePerPage={tableData.pagination.perPage}
          totalSize={tableData.pagination.totalCount}
          onTableChange={handleTableChange}
          handleOnSelect={handleOnSelect}
          handleOnSelectAll={handleOnSelectAll}
        />
      </div>
      {(tableData.pagination.totalCount > tableData.pagination.perPage) ? (
        <div style={(styles && styles.footerBox) ?
          { ...defaultStyle.footerBox, ...styles.footerBox } :
          defaultStyle.footerBox
        }
        >
          <div style={{ display: 'flex' }}>
            <span style={{ lineHeight: '36px', fontSize: 16, paddingRight: 15 }}>Show</span>
            <Select
              simpleValue
              className="page-select-box"
              name="perPage"
              placeholder="10 recordes"
              clearable={false}
              value={perPage}
              options={[
                { value: 10, label: '10 recordes' },
                { value: 20, label: '20 recordes' },
                { value: 50, label: '50 recordes' },
                { value: 100, label: '100 recordes' },
              ]}
              onChange={handlePerPageChange}
            />
          </div>
          <div style={{ textAlign: 'right' }}>
            <Pagination
              page={tableData.pagination.currentPage}
              pageCount={tableData.pagination.pageCount}
              onChange={handlePageChange}
            />
          </div>
        </div>
      ) : null }

    </div>

  );
};

CommonBSTable.propTypes = {
  styles: shape({
    tableBox: any,
    title: any,
    search: any,
    table: any,
  }),
  title: string,
  loading: bool.isRequired,
  columns: array.isRequired,
  selectRow: shape({
    mode: string,
    clickToSelect: bool,
    style: any,
  }),
  tableData: shape({
    data: array,
    pagination: shape({
      currentPage: number,
      perPage: number,
      pageCount: number,
      totalCount: number,
    }),
  }).isRequired,
  handlePageChange: func.isRequired,
  handleTableChange: func.isRequired,
  handlePerPageChange: func.isRequired,
  handleOnSelect: func,
  handleOnSelectAll: func,
};

export default CommonBSTable;
