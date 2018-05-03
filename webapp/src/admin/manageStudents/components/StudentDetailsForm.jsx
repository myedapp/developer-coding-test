import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { any, bool, func, string } from 'prop-types';

import { SimpleCardLayout } from '../../../common/components';
import styles, { stylesDetails } from './Styles';
import StudentInfoSubForm from './StudentInfoSubForm';
import StudentDetailsSubForm from './StudentDetailsSubForm';


/* eslint no-unused-expressions: 0 */

const BackPreviousPage = props => (
  <div style={{ display: 'flex' }}>
    <Link to="/admin/manage-students" style={stylesDetails.backArrowBox}>
      <div style={stylesDetails.backBox}>
        <span>
          <i className="fa fa-angle-left" />
        </span>
      </div>
    </Link>
    <div>
      <div style={stylesDetails.backTitle}>
        {props.name}
      </div>
      <div style={stylesDetails.backText}>
        {props.code}
      </div>
    </div>
  </div>
);

BackPreviousPage.propTypes = {
  name: string.isRequired,
  code: string.isRequired,
};

const ActionButtons = (props) => {
  const {
    editFlag,
    handleDeletion,
    handleCancel,
  } = props;
  const deleteBtnShowStyle = editFlag ? styles.showMe : styles.hideMe;
  const saveBtnIconName = editFlag ? 'fa fa-save' : 'fa fa-plus';
  const saveBtnLabel = editFlag ? 'Save' : 'Show Student';
  return (
    <div>
      <button
        type="button"
        className="btn btn-default"
        style={{ ...styles.actionDeleteButton, backgroundColor: '#F06666', ...deleteBtnShowStyle }}
        onClick={handleDeletion}
      >
        <i className="fa fa-trash-o" style={{ fontSize: 18 }} />
        <span style={styles.buttonText}>Delete</span>
      </button>
      <button
        type="submit"
        className="btn btn-default"
        style={{ ...styles.actionReactivateButton, backgroundColor: '#8CCBFE' }}
      >
        <i className={saveBtnIconName} style={{ fontSize: 18 }} />
        <span style={styles.buttonText}>{saveBtnLabel}</span>
      </button>

      <button
        type="button"
        className="btn btn-default"
        style={{ ...styles.actionAddButton, backgroundColor: 'transparent', color: '#F06666' }}
        onClick={handleCancel}
      >
        <i className="fa fa-close" style={{ fontSize: 18 }} />
        <span style={styles.buttonText}>Cancel</span>
      </button>

    </div>
  );
};

ActionButtons.propTypes = {
  editFlag: bool.isRequired,
  handleDeletion: func.isRequired,
  handleCancel: func.isRequired,
};

class StudentDetailsForm extends Component {
  constructor(props) {
    super(props);

    this.handleDeletion = this.handleDeletion.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleDeletion() {
    this.props.handleDeletion && this.props.handleDeletion();
  }

  handleCancel() {
    this.props.history.push('/admin/manage-students');
  }

  render() {
    const { editFlag, data, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div className="row" style={stylesDetails.headerBox}>
          <div className="back-previous-box col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <BackPreviousPage
              name={editFlag ? (data && data.name) : 'Show Quest Path'}
              code={editFlag ? (data && data.code) : ''}
            />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6" style={{ textAlign: 'right', display: 'none' }} >
            <ActionButtons
              editFlag={editFlag}
              handleDeletion={this.handleDeletion}
              handleCancel={this.handleCancel}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <SimpleCardLayout title="Student Quest Paths">
              <StudentInfoSubForm data={data} />
            </SimpleCardLayout>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <SimpleCardLayout title="Student Details">
              <StudentDetailsSubForm />
            </SimpleCardLayout>
          </div>

        </div>
        <div className="row">
          <div className="col-xs-12">
            <SimpleCardLayout title="Student Images" />
          </div>
        </div>

      </form>
    );
  }
}

StudentDetailsForm.propTypes = {
  editFlag: bool,
  data: any,
  history: any.isRequired,
  handleSubmit: func.isRequired,
  handleDeletion: func,
};

StudentDetailsForm.defaultProps = {
  editFlag: false,
  data: {},
  handleDeletion: null,
};

export default withRouter(StudentDetailsForm);
