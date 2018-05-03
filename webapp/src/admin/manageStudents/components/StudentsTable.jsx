import React, { Component } from 'react';
import { history, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import shortid from 'shortid';

import { CommonBSTable } from '../../../common/components';
import styles from './Styles';
import { columns } from './columnsDef';

/* eslint no-unused-vars: 0 */
/* eslint react/prop-types: 0 */
/* eslint no-underscore-dangle: 0 */
/* eslint react/no-did-update-set-state: 0 */
/* eslint no-restricted-globals: 0 */
/* eslint no-alert: 0 */


class StudentsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0,
      loading: false,
      perPage: 10,
    };

    this.selectedSet = [];

    this.handleTableChange = this.handleTableChange.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handlePerPageChange = this.handlePerPageChange.bind(this);
    this.handleOnSelect = this.handleOnSelect.bind(this);
    this.handleOnSelectAll = this.handleOnSelectAll.bind(this);
    this.handleDeletion = this.handleDeletion.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.accounts !== this.props.accounts) {
      this.selectedSet = [];
    }

    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    const { dataset } = this.props;

    if ((dataset.students !== prevProps.dataset.students)) {
      this.setState({ loading: false });
    }
  }

  handlePerPageChange(val) {
    const { currentTab } = this.state;

    this.setState(() => ({ perPage: val }));
    this.props.getData(val, 1, columns[currentTab].name, columns[currentTab].url);
  }

  handleTableChange(type, {
    page, sizePerPage, filters, sortField, sortOrder,
  }) {
    const { currentTab, perPage } = this.state;

    this.setState(() => ({ loading: true }));

    this.props.getData(perPage, page, columns[currentTab].name, columns[currentTab].url);
  }

  handlePageChange(page) {
    const { currentTab, perPage } = this.state;

    this.setState(() => ({ loading: true }));

    this.props.getData(perPage, page, columns[currentTab].name, columns[currentTab].url);
  }

  handleOnSelect(row, isSelect) {
    if (isSelect) {
      this.selectedSet.push(row.id);
    } else {
      this.selectedSet = this.selectedSet.filter(x => x !== row.id);
    }
  }

  handleOnSelectAll(isSelect, rows) {
    const ids = rows.map(r => r.id);
    if (isSelect) {
      this.selectedSet = ids;
    } else {
      this.selectedSet = [];
    }
  }

  handleDeletion(e) {
    if (!this.selectedSet.length) {
      return;
    }

    if (!confirm('Are you sure to DELETE the student(s) record? ')) {}
  }

  handleAdd(e) {

  }

  handleEdit(e) {
    if (this.selectedSet.length < 1) {
      alert('Please select one student!');
      return;
    }

    this.props.history.push(`/admin/manage-students-edit/${this.selectedSet[0]}`);
  }

  render() {
    const { dataset } = this.props;
    const {
      currentTab,
      loading,
      perPage,
    } = this.state;

    return (
      <div>
        <div style={{ ...styles.usersTabBoxOuter, marginTop: 30 }}>
          <div style={styles.usersTabBox}>
            <button
              type="button"
              className="btn btn-default"
              style={styles.actionDeleteButton}
              onClick={this.handleDeletion}
            >
              <span className="glyphicon glyphicon-trash" />
              <span style={styles.buttonText}>Delete</span>
            </button>
            <button
              type="button"
              className="btn btn-default"
              style={styles.actionAddButton}
              onClick={this.handleAdd}
            >
              <span className="glyphicon glyphicon-plus" />
              <span style={styles.buttonText}>Add</span>
            </button>
            <button
              type="button"
              className="btn btn-default"
              style={styles.actionAddButton}
              onClick={this.handleEdit}
            >
              <span className="glyphicon glyphicon-book" />
              <span style={styles.buttonText}>Show Quest Path</span>
            </button>
          </div>
        </div>

        <CommonBSTable
          styles={styles}
          title={columns[currentTab].label}
          loading={loading}
          perPage={perPage}
          tableData={dataset.students}
          columns={columns[currentTab].columnsDef}
          paginationFlag
          handleTableChange={this.handleTableChange}
          handlePageChange={this.handlePageChange}
          handlePerPageChange={this.handlePerPageChange}
          handleOnSelect={this.handleOnSelect}
          handleOnSelectAll={this.handleOnSelectAll}
        />

      </div>
    );
  }
}

export default withRouter(StudentsTable);
