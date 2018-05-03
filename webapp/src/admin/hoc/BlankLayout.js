import React, { Component } from 'react';
import { compose } from 'redux';

import 'font-awesome/css/font-awesome.min.css';
import './BlankLayout.css';
import Alert from '../../common/components/Alert';
import ErrorBoundary from '../../common/hocs/ErrorBoundary';
import ErrorPage from '../components/ErrorPage';

function BlankLayout(WrappedComponent) {
  class Wrapper extends Component {
    componentDidMount() {
      if (!document.body.className.includes('login')) {
        document.body.className += ' login';
      }
      if (!document.body.className.includes('blank-layout')) {
        document.body.className += ' blank-layout';
      }
    }

    componentWillUnmount() {
      document.body.className = document.body.className.replace('login', '').replace('blank-layout', '').trim();
    }

    render() {
      return (
        <div>
          <div className="login_wrapper">
            <div className="animate form login_form">
              <section className="login_content">
                <Alert />
                <WrappedComponent {...this.props} />
              </section>
            </div>
          </div>
        </div>
      );
    }
  }

  Wrapper.displayName = 'BlankLayout';
  return Wrapper;
}

export default compose(
  BlankLayout,
  ErrorBoundary(ErrorPage),
);
