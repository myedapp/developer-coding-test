import React, { Component } from 'react';
import { bool, func } from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { setTitle } from '../../../common/actions';
import {
  getStudentsList,
  getStudentDetailsById,
  updateStudentDetails,
  deleteStudentsList,
  deleteStudentById,
  updateStudentStatusById,
} from '../actions';
import Spinner from '../../../common/components/Spinner';

import StudentsTable from '../components/StudentsTable';
import AdminLayout from '../../hoc/AdminLayout';

/* eslint react/require-default-props: 0 */
/* eslint react/prop-types: 0 */
/* eslint no-unused-expressions: 0 */

class StudentsManagePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userType: 'student',
      sizePerPage: 10,
      firstFetchFlag: true,
    };

    this.handleGetStudentsList = this.handleGetStudentsList.bind(this);
  }


  componentDidMount() {
    const { setTitle, getStudentsList } = this.props;
    const { userType, sizePerPage } = this.state;

    setTitle('Student Management');
    getStudentsList({
      limit: sizePerPage, page: 1, userType, url: 'students',
    });
  }

  shouldComponentUpdate(nextProps) {
    if (!nextProps.studentsListLoaded && !this.state.firstFetchFlag) {
      return false;
    }

    return true;
  }

  handleGetStudentsList(limit, page, userType, url) {
    const { getStudentsList } = this.props;
    const { firstFetchFlag } = this.state;

    firstFetchFlag && this.setState({ firstFetchFlag: false });
    getStudentsList({
      limit, page, userType, url,
    });
  }

  render() {
    const {
      studentsListLoaded,
      students,
      deleteStudentById,
      updateStudentStatusById,
      deleteStudentsList,
    } = this.props;
    const { firstFetchFlag } = this.state;

    if (firstFetchFlag && !studentsListLoaded) {
      return (
        <Spinner />
      );
    }

    return (
      <div className="x_panel_">
        <StudentsTable
          dataset={students}
          getData={this.handleGetStudentsList}
          deleteStudentById={deleteStudentById}
          updateStudentStatusById={updateStudentStatusById}
          deleteStudentsList={deleteStudentsList}
        />
      </div>
    );
  }
}

StudentsManagePage.propTypes = {
  studentsListLoaded: bool,
  getStudentsList: func.isRequired,
  // getStudentDetailsById: func.isRequired,
  // updateStudentDetails: func.isRequired,
  deleteStudentsList: func.isRequired,
  deleteStudentById: func.isRequired,
  updateStudentStatusById: func.isRequired,
  setTitle: func.isRequired,
};

StudentsManagePage.defaultProps = {
  studentsListLoaded: false,
};

export default compose(
  AdminLayout,
  connect(
    state => ({
      studentsListLoaded: state.common.requestFinished.studentsList,
      students: state.admin.students,
    }),
    dispatch => ({
      // set page title
      setTitle: title => dispatch(setTitle(title)),

      getStudentsList: (data) => {
        const action = getStudentsList(data);
        dispatch(action);
        return action.promise;
      },

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

      deleteStudentsList: (data) => {
        const action = deleteStudentsList(data);
        dispatch(action);
        return action.promise;
      },

      deleteStudentById: (data) => {
        const action = deleteStudentById(data);
        dispatch(action);
        return action.promise;
      },

      updateStudentStatusById: (data) => {
        const action = updateStudentStatusById(data);
        dispatch(action);
        return action.promise;
      },

    }),
  ),
)(StudentsManagePage);
