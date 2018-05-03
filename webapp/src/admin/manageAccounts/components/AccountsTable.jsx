import React, { Component } from 'react';
import { history, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import shortid from 'shortid';

import { CommonBSTable } from '../../../common/components';
import styles from './Styles';
import { columns } from './columnsDef';
import { UserTypeEnum } from '../constants/userTypes';

/* eslint no-unused-vars: 0 */
/* eslint react/prop-types: 0 */
/* eslint no-underscore-dangle: 0 */
/* eslint react/no-did-update-set-state: 0 */
/* eslint no-restricted-globals: 0 */
/* eslint no-alert: 0 */


class AccountsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0,
      loading: false,
      perPage: 10,
    };

    this.selectedSet = [];

    this.handleTabClick = this.handleTabClick.bind(this);
    this.handleTableChange = this.handleTableChange.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handlePerPageChange = this.handlePerPageChange.bind(this);
    this.handleOnSelect = this.handleOnSelect.bind(this);
    this.handleOnSelectAll = this.handleOnSelectAll.bind(this);
    this.handleReactivation = this.handleReactivation.bind(this);
    this.handleSuspence = this.handleSuspence.bind(this);
    this.handleDeletion = this.handleDeletion.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.accounts !== this.props.accounts) {
      this.selectedSet = [];
    }

    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    const { accounts } = this.props;

    if ((accounts.customers !== prevProps.accounts.customers)) {
      this.setState({ loading: false });
    }
  }

  handlePerPageChange(val) {
    const { currentTab } = this.state;

    this.setState(() => ({ perPage: val }));
    this.props.getData(val, 1, columns[currentTab].name, columns[currentTab].url);
  }

  handleTabClick(e, index) {
    const { perPage } = this.state;

    this.setState(() => ({ currentTab: index }));

    this.props.getData(perPage, 1, columns[index].name, columns[index].url);
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
      this.selectedSet.push(row._id);
    } else {
      this.selectedSet = this.selectedSet.filter(x => x !== row._id);
    }
  }

  handleOnSelectAll(isSelect, rows) {
    const ids = rows.map(r => r._id);
    if (isSelect) {
      this.selectedSet = ids;
    } else {
      this.selectedSet = [];
    }
  }

  handleReactivation(e) {
    if (!this.selectedSet.length) {
      return;
    }

    if (!confirm('Are you sure to REACTIVATE the user? ')) {
      return;
    }

    const { updateCustomersStatus } = this.props;
    const { currentTab } = this.state;
    // this.props.updateCustomerStatusById({
    //   uid: this.selectedSet[0],
    //   url: columns[currentTab].url,
    //   status: 'Active',
    // });

    updateCustomersStatus({
      ids: this.selectedSet,
      url: columns[currentTab].url,
      status: 'Active',
    });
  }

  handleSuspence(e) {
    if (!this.selectedSet.length) {
      return;
    }

    if (!confirm('Are you sure to SUSPEND the user? ')) {
      return;
    }

    const { updateCustomersStatus } = this.props;
    const { currentTab } = this.state;
    // this.props.updateCustomerStatusById({
    //   uid: this.selectedSet[0],
    //   url: columns[currentTab].url,
    //   status: 'Inactive',
    // });
    updateCustomersStatus({
      ids: this.selectedSet,
      url: columns[currentTab].url,
      status: 'Inactive',
    });
  }

  handleDeletion(e) {
    if (!this.selectedSet.length) {
      return;
    }

    if (!confirm('Are you sure to DELETE the user record? ')) {
      return;
    }

    const { updateCustomersStatus } = this.props;
    const { currentTab } = this.state;
    // this.props.deleteCustomerById({
    //   uid: this.selectedSet[0],
    //   url: columns[currentTab].url,
    // });
    updateCustomersStatus({
      ids: this.selectedSet,
      url: columns[currentTab].url,
      status: 'Deleted',
    });
  }

  handleAdd(e) {
    if (!this.selectedSet.length) {
      return;
    }
    const { currentTab } = this.state;
    this.props.Add('Active', this.selectedSet, columns[currentTab].name, columns[currentTab].url);
  }

  render() {
    const { accounts } = this.props;
    const {
      currentTab,
      loading,
      perPage,
    } = this.state;
    const stylesActive = {
      ...styles.usersTab,
      ...styles.usersTabActive,
    };

    // console.warn('AccountsTable: pagination : accounts = ', accounts.customers);

    return (
      <div>
        <div style={{ ...styles.usersTabBoxOuter, marginTop: 30 }}>
          <div style={styles.usersTabBox}>
            <button
              type="button"
              className="btn btn-default"
              style={styles.actionReactivateButton}
              onClick={e => this.handleReactivation(e)}
            >
              <span className="glyphicon glyphicon-refresh" />
              <span style={styles.buttonText}>Reactivate User</span>
            </button>
            <button
              type="button"
              className="btn btn-default"
              style={styles.actionSuspendButton}
              onClick={this.handleSuspence}
            >
              <span className="glyphicon glyphicon-ban-circle" />
              <span style={styles.buttonText}>Suspend User</span>
            </button>
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
          </div>
        </div>
        <div style={styles.usersTabBoxOuter}>
          <div style={styles.usersTabBox}>
            {
              columns.map((column, index) => {
                if (currentTab === index) {
                  return (
                    <div
                      key={shortid.generate()}
                      style={stylesActive}
                      onClick={e => this.handleTabClick(e, index)}
                    >
                      {column.label}
                    </div>
                  );
                }
                return (
                  <div
                    key={shortid.generate()}
                    style={styles.usersTab}
                    onClick={e => this.handleTabClick(e, index)}
                  >
                    {column.label}
                  </div>
                );
              })
            }
          </div>
        </div>

        <CommonBSTable
          styles={styles}
          title={columns[currentTab].label}
          loading={loading}
          perPage={perPage}
          tableData={accounts.customers}
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

export default withRouter(AccountsTable);
