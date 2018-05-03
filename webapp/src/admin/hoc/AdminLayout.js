import React, { Component } from 'react';
import { string } from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import $ from 'jquery';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'font-awesome/css/font-awesome.min.css';
import 'gentelella/build/css/custom.min.css';
import LoginRequired from '../../common/hocs/LoginRequired';
import ErrorBoundary from '../../common/hocs/ErrorBoundary';
import ErrorPage from '../components/ErrorPage';
import Sidebar from './AdminLayout/Sidebar';
import TopNav from './AdminLayout/TopNav';
import Alert from '../../common/components/Alert';

function AdminLayout(WrappedComponent) {
  class Wrapper extends Component {
    componentDidMount() {
      $('body').addClass('nav-md');
      this.initSidebar();
    }

    componentWillUnmount() {
      $('body').removeClass('nav-md');
    }

    initSidebar() {
      const CURRENT_URL = window.location.href.split('#')[0].split('?')[0];
      const $BODY = $('body');
      const $MENU_TOGGLE = $('#menu_toggle');
      const $SIDEBAR_MENU = $('#sidebar-menu');
      const $SIDEBAR_FOOTER = $('.sidebar-footer');
      const $LEFT_COL = $('.left_col');
      const $RIGHT_COL = $('.right_col');
      const $NAV_MENU = $('.nav_menu');
      const $FOOTER = $('footer');

      // TODO: This is some kind of easy fix, maybe we can improve this
      function setContentHeight() {
        // reset height
        $RIGHT_COL.css('min-height', $(window).height());

        const bodyHeight = $BODY.outerHeight();
        const footerHeight = $BODY.hasClass('footer_fixed') ? -10 : $FOOTER.height();
        const leftColHeight = $LEFT_COL.eq(1).height() + $SIDEBAR_FOOTER.height();
        let contentHeight = bodyHeight < leftColHeight ? leftColHeight : bodyHeight;

        // normalize content
        contentHeight -= $NAV_MENU.height() + footerHeight;

        $RIGHT_COL.css('min-height', contentHeight);
      }

      $SIDEBAR_MENU.find('a').on('click', function (ev) {
        const $li = $(this).parent();

        if ($li.is('.active')) {
          $li.removeClass('active active-sm');
          $('ul:first', $li).slideUp(() => {
            setContentHeight();
          });
        } else {
          // prevent closing menu if we are on child menu
          if (!$li.parent().is('.child_menu')) {
            $SIDEBAR_MENU.find('li').removeClass('active active-sm');
            $SIDEBAR_MENU.find('li ul').slideUp();
          } else if ($BODY.is('.nav-sm')) {
            $SIDEBAR_MENU.find('li').removeClass('active active-sm');
            $SIDEBAR_MENU.find('li ul').slideUp();
          }
          $li.addClass('active');

          $('ul:first', $li).slideDown(() => {
            setContentHeight();
          });
        }
      });

      // toggle small or large menu
      $MENU_TOGGLE.on('click', () => {
        if ($BODY.hasClass('nav-md')) {
          $SIDEBAR_MENU.find('li.active ul').hide();
          $SIDEBAR_MENU.find('li.active').addClass('active-sm').removeClass('active');
        } else {
          $SIDEBAR_MENU.find('li.active-sm ul').show();
          $SIDEBAR_MENU.find('li.active-sm').addClass('active').removeClass('active-sm');
        }

        $BODY.toggleClass('nav-md nav-sm');

        setContentHeight();
      });

      // check active menu
      $SIDEBAR_MENU.find(`a[href="${CURRENT_URL}"]`).parent('li').addClass('current-page');

      $SIDEBAR_MENU.find('a').filter(function () {
        return this.href === CURRENT_URL;
      }).parent('li').addClass('current-page')
        .parents('ul')
        .slideDown(() => {
          setContentHeight();
        })
        .parent()
        .addClass('active');

      // recompute content when resizing
      $(window).resize(() => {
        setContentHeight();
      });

      setContentHeight();
    }

    render() {
      const { title, ...passThroughProps } = this.props;
      return (
        <div className="container body">
          <div className="main_container">
            <div className="col-md-3 left_col">
              <div className="left_col scroll-view">
                <div className="navbar nav_title" style={{ border: 0 }}>
                  <Link to="/admin/profile" className="site_title">
                    <i className="fa fa-paw" />&nbsp;
                    <span>myEdOnline</span>
                  </Link>
                </div>

                <div className="clearfix" />
                <br />

                <Sidebar />
              </div>
            </div>

            <TopNav />

            <div className="right_col" role="main" style={{ backgroundColor: '#F5FAFE' }}>
              <div className="">
                <div className="page-title">
                  <div className="title_left">
                    <h3>{title}</h3>
                  </div>
                </div>

                <div className="clearfix" />

                <div className="row">
                  <div className="col-md-12 col-sm-12 col-xs-12">
                    <Alert />
                    <WrappedComponent {...passThroughProps} />
                  </div>
                </div>
              </div>
            </div>

            <footer>
              <div className="pull-right">
                React App: Web Portal created by <a target="_blank" href="https://www.linkedin.com/in/matt-gao/" rel="noopener noreferrer">Matt Gao</a>
              </div>
              <div className="clearfix" />
            </footer>

          </div>
        </div>
      );
    }
  }

  Wrapper.propTypes = {
    title: string,
  };

  Wrapper.defaultProps = {
    title: 'React App',
  };

  Wrapper.displayName = 'AdminLayout';
  return Wrapper;
}

export default compose(
  LoginRequired('/login'),
  connect(state => ({
    title: state.common.title,
  })),
  AdminLayout,
  ErrorBoundary(ErrorPage),
);
