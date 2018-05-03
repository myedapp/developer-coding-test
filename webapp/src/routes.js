import React from 'react';
import { Route } from 'react-router-dom';
import shortid from 'shortid';

import { makeLoadable } from './common/hocs';
import {
  superadminUserAuthenticated,
  businessadminUserAuthenticated,
  customerUserAuthenticated,
  ProtectedRoute,
} from './common/containers/ProtectedRoute';


// Async all pages.
const AsyncAdminLogin = makeLoadable({ loader: () => import('./admin/login/components/LoginPage') });
const AsyncNotFound = makeLoadable({ loader: () => import('./common/components/NotFoundPage') });
const AsyncAdminProfile = makeLoadable({ loader: () => import('./admin/profile/components/ProfilePage') });
const AsyncAdminResetPassword = makeLoadable({ loader: () => import('./admin/resetPassword/components/ResetPasswordPage') });
const AsyncAdminManageStudents = makeLoadable({ loader: () => import('./admin/manageStudents/containers/StudentsManagePage') });
const AsyncAdminManageStudentsAdd = makeLoadable({ loader: () => import('./admin/manageStudents/containers/StudentsManageAddPage') });
const AsyncAdminManageStudentsEdit = makeLoadable({ loader: () => import('./admin/manageStudents/containers/StudentsManageEditPage') });

/**
 * Routes table.
 */

// common routes.
const commonRoutes = [
  <Route
    exact
    key={shortid.generate()}
    path="/login"
    component={AsyncAdminLogin}
  />,
  <Route
    exact
    key={shortid.generate()}
    path="/"
    component={AsyncAdminLogin}
  />,
  <Route
    exact
    key={shortid.generate()}
    path="/reset-password"
    component={AsyncAdminLogin}
  />,
];

// super admin routes.
const superadminRoutes = [
  <ProtectedRoute
    exact
    key={shortid.generate()}
    path="/admin"
    condition={superadminUserAuthenticated}
    component={AsyncAdminManageStudents}
  />,
  <ProtectedRoute
    exact
    key={shortid.generate()}
    path="/admin/profile"
    condition={superadminUserAuthenticated}
    component={AsyncAdminProfile}
  />,
  <Route
    exact
    key={shortid.generate()}
    path="/admin/reset-password"
    component={AsyncAdminResetPassword}
  />,
  <ProtectedRoute
    exact
    key={shortid.generate()}
    path="/admin/manage-students"
    condition={superadminUserAuthenticated}
    component={AsyncAdminManageStudents}
  />,
  <ProtectedRoute
    exact
    key={shortid.generate()}
    path="/admin/manage-students-add"
    condition={superadminUserAuthenticated}
    component={AsyncAdminManageStudentsAdd}
  />,
  <ProtectedRoute
    exact
    key={shortid.generate()}
    path="/admin/manage-students-edit/:id"
    condition={superadminUserAuthenticated}
    component={AsyncAdminManageStudentsEdit}
  />,
];

// another admin routes.
// only for test
const companyRoutes = [
  <ProtectedRoute
    exact
    key={shortid.generate()}
    path="/profile"
    condition={businessadminUserAuthenticated}
    component={AsyncNotFound}
  />,
];

// common user routes.
// only for test.
const customerRoutes = [
  <ProtectedRoute
    exact
    key={shortid.generate()}
    path="/profile"
    condition={customerUserAuthenticated}
    component={AsyncNotFound}
  />,
];

// default route.
const defaultRoute = [
  <Route
    component={AsyncNotFound}
  />,
];

const Routes = [
  ...commonRoutes,
  ...superadminRoutes,
  ...companyRoutes,
  ...customerRoutes,
  ...defaultRoute,
];

export default Routes;
