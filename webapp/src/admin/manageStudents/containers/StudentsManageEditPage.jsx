import React, { Component } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';
import { delay } from 'redux-saga';

import { setTitle } from '../../../common/actions';
import { ALERT_DISPLAY_DURATION } from '../../../common/constants/params';

import {
  getStudentDetailsById,
  updateStudentDetails,
  deleteStudentById,
} from '../actions';

import { withPreventingCheckHOC } from '../../../common/hocs';
import StudentDetailsForm from '../components/StudentDetailsForm';
import AdminLayout from '../../hoc/AdminLayout';

import { Spinner } from '../../../common/components';

/* eslint react/require-default-props: 0 */
/* eslint react/prop-types: 0 */
/* eslint no-unused-expressions: 0 */
/* eslint no-restricted-globals: 0 */
/* eslint no-alert: 0 */

const EDIT_STUDENT_FORM = 'admin/editStudentDetail';

const EditStudentDetailsForm = compose(
  reduxForm({
    form: EDIT_STUDENT_FORM,
  }),
  withPreventingCheckHOC,
)(StudentDetailsForm);


class StudentsManageEditPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstFetchFlag: true,
      userType: 'student',
      studentId: this.props.match.params.id,
    };

    this.handleStudentSubmit = this.handleStudentSubmit.bind(this);
    this.handleSuccesUpdate = this.handleSuccesUpdate.bind(this);
    this.handleDeletion = this.handleDeletion.bind(this);
  }


  componentDidMount() {
    const { setTitle, getStudentDetailsById } = this.props;
    const { userType, studentId } = this.state;

    setTitle('');
    getStudentDetailsById({
      userType,
      url: 'students',
      uid: studentId,
    });
  }

  shouldComponentUpdate(nextProps) {
    if (!nextProps.studentDetails && !this.state.firstFetchFlag) {
      return false;
    }

    return true;
  }

  async handleDeletion() {
    if (!confirm('Are you sure to DELETE the student record? ')) {
      return;
    }

    const { studentId, userType } = this.state;

    const response = await this.props.deleteStudentById({
      url: userType,
      uid: studentId,
    });

    if (response.status === 200) {
      await delay(ALERT_DISPLAY_DURATION);
      this.props.history.push('/admin/manage-students');
    }
  }

  async handleStudentSubmit(values) {
    if (!values) {
      return;
    }

    await delay(ALERT_DISPLAY_DURATION);
  }

  async handleSuccesUpdate() {
    await delay(ALERT_DISPLAY_DURATION);
    this.props.history.push('/admin/manage-students');
  }

  render() {
    const { studentDetails, student, form: { dirty, submitSucceeded } } = this.props;
    const { firstFetchFlag } = this.state;

    if ((firstFetchFlag && !studentDetails) || (JSON.stringify(student) === '{}')) {
      return (
        <Spinner />
      );
    }

    if (!dirty && submitSucceeded) {
      this.handleSuccesUpdate();
    }
    return (
      <div className="x_panel_">
        <EditStudentDetailsForm
          data={student}
          initialValues={student}
          onSubmit={this.handleStudentSubmit}
          handleDeletion={this.handleDeletion}
        />
      </div>
    );
  }
}

StudentsManageEditPage.propTypes = {
  setTitle: func.isRequired,
};

StudentsManageEditPage.defaultProps = {
};

export default compose(
  AdminLayout,

  connect(
    state => ({
      studentDetails: state.common.requestFinished.studentDetails,
      student: state.admin.students.students.student || {},
      form: state.form['admin/editStudentDetail'] || {},
    }),
    dispatch => ({
      // set page title
      setTitle: title => dispatch(setTitle(title)),

      getStudentDetailsById: (data) => {
        const action = getStudentDetailsById(data);
        dispatch(action);
        return action.promise;
      },

      updateStudentDetails: (data) => {
        const action = updateStudentDetails(data);
        dispatch(action);
        return action.promise;
      },

      deleteStudentById: (data) => {
        const action = deleteStudentById(data);
        dispatch(action);
        return action.promise;
      },

    }),
  ),
)(StudentsManageEditPage);
