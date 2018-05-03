import React, { Component } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';
import { delay } from 'redux-saga';

import { setTitle } from '../../../common/actions';
import { ALERT_DISPLAY_DURATION } from '../../../common/constants/params';

import { createStudent } from '../actions';

import { withPreventingCheckHOC } from '../../../common/hocs';
import StudentDetailsForm from '../components/StudentDetailsForm';
import AdminLayout from '../../hoc/AdminLayout';

import { materialAllowances } from '../constants/studentDefs';

/* eslint react/require-default-props: 0 */
/* eslint react/prop-types: 0 */
/* eslint no-unused-expressions: 0 */

const ADD_PRODUCT_FORM = 'admin/addStudentDetail';

const AddStudentDetailsForm = compose(
  reduxForm({
    form: ADD_PRODUCT_FORM,
  }),
  withPreventingCheckHOC,
)(StudentDetailsForm);


class StudentsManageAddPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstFetchFlag: true,
    };

    this.handleStudentSubmit = this.handleStudentSubmit.bind(this);
    this.handleSuccesCreate = this.handleSuccesCreate.bind(this);
  }


  componentDidMount() {
    const { setTitle } = this.props;

    setTitle('');
  }

  shouldComponentUpdate(nextProps) {
    if (!nextProps.productsListLoaded && !this.state.firstFetchFlag) {
      return false;
    }

    return true;
  }

  async handleStudentSubmit(values) {
    if (!values) {
      return;
    }

    await delay(ALERT_DISPLAY_DURATION);
  }

  async handleSuccesCreate() {
    await delay(ALERT_DISPLAY_DURATION);
    this.props.history.push('/admin/manage-students');
  }

  render() {
    const { dirty, submitSucceeded } = this.props.form;
    if (!dirty && submitSucceeded) {
      this.handleSuccesCreate();
    }
    return (
      <div className="x_panel_">
        <AddStudentDetailsForm
          onSubmit={this.handleStudentSubmit}
        />
      </div>
    );
  }
}

StudentsManageAddPage.propTypes = {
  setTitle: func.isRequired,
};

StudentsManageAddPage.defaultProps = {
};

export default compose(
  AdminLayout,

  connect(
    state => ({
      productsListLoaded: state.common.requestFinished.productsList,
      products: state.admin.products,
      form: state.form['admin/addStudentDetail'] || {},
    }),
    dispatch => ({
      // set page title
      setTitle: title => dispatch(setTitle(title)),

      createStudent: (data) => {
        const action = createStudent(data);
        dispatch(action);
        return action.promise;
      },

    }),
  ),
)(StudentsManageAddPage);
