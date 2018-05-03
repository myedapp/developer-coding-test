import React, { Component } from 'react';
import { bool, func } from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { setTitle } from '../../../common/actions';
import {
  getCustomersList,
  getCustomerDetailsById,
  updateCustomerDetails,
  deleteCustomersList,
  deleteCustomerById,
  updateCustomerStatusById,
  updateCustomersStatus,
} from '../actions';
import Spinner from '../../../common/components/Spinner';
import { UserTypeEnum } from '../../../common/constants/routesConfig';

import AccountsTable from './AccountsTable';
import AdminLayout from '../../hoc/AdminLayout';

/* eslint react/require-default-props: 0 */
/* eslint react/prop-types: 0 */
/* eslint no-unused-expressions: 0 */

class AccountsManagePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userType: UserTypeEnum.RESIDENTIAL_CUSTOMER,
      sizePerPage: 10,
      firstFetchFlag: true,
    };

    this.handleGetCustomersList = this.handleGetCustomersList.bind(this);
  }


  componentDidMount() {
    const { setTitle, getCustomersList } = this.props;
    const { userType, sizePerPage } = this.state;

    setTitle('Manage Accounts');
    getCustomersList({
      limit: sizePerPage, page: 1, userType, url: 'res-customers',
    });
  }

  shouldComponentUpdate(nextProps) {
    if (!nextProps.customersListLoaded && !this.state.firstFetchFlag) {
      return false;
    }

    return true;
  }

  handleGetCustomersList(limit, page, userType, url) {
    const { getCustomersList } = this.props;
    const { firstFetchFlag } = this.state;

    firstFetchFlag && this.setState({ firstFetchFlag: false });
    getCustomersList({
      limit, page, userType, url,
    });
  }

  render() {
    const {
      customersListLoaded,
      accounts,
      deleteCustomerById,
      updateCustomerStatusById,
      updateCustomersStatus,
    } = this.props;
    const { firstFetchFlag } = this.state;

    if (firstFetchFlag && !customersListLoaded) {
      return (
        <Spinner />
      );
    }

    return (
      <div className="x_panel_">
        <AccountsTable
          accounts={accounts}
          getData={this.handleGetCustomersList}
          deleteCustomerById={deleteCustomerById}
          updateCustomerStatusById={updateCustomerStatusById}
          updateCustomersStatus={updateCustomersStatus}
        />
      </div>
    );
  }
}

AccountsManagePage.propTypes = {
  customersListLoaded: bool,
  getCustomersList: func.isRequired,
  // getCustomerDetailsById: func.isRequired,
  // updateCustomerDetails: func.isRequired,
  // deleteCustomersList: func.isRequired,
  deleteCustomerById: func.isRequired,
  updateCustomerStatusById: func.isRequired,
  setTitle: func.isRequired,
};

AccountsManagePage.defaultProps = {
  customersListLoaded: false,
};

export default compose(
  AdminLayout,
  connect(
    state => ({
      customersListLoaded: state.common.requestFinished.customersList,
      accounts: state.admin.accounts,
    }),
    dispatch => ({
      // set page title
      setTitle: title => dispatch(setTitle(title)),

      getCustomersList: (data) => {
        const action = getCustomersList(data);
        dispatch(action);
        return action.promise;
      },

      getCustomerDetailsById: (data) => {
        const action = getCustomerDetailsById(data);
        dispatch(action);
        return action.promise;
      },

      updateCustomerDetails: (data) => {
        const action = updateCustomerDetails(data);
        dispatch(action);
        return action.promise;
      },

      deleteCustomersList: (data) => {
        const action = deleteCustomersList(data);
        dispatch(action);
        return action.promise;
      },

      deleteCustomerById: (data) => {
        const action = deleteCustomerById(data);
        dispatch(action);
        return action.promise;
      },

      updateCustomerStatusById: (data) => {
        const action = updateCustomerStatusById(data);
        dispatch(action);
        return action.promise;
      },

      updateCustomersStatus: (data) => {
        const action = updateCustomersStatus(data);
        dispatch(action);
        return action.promise;
      },

    }),
  ),
)(AccountsManagePage);
