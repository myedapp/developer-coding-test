// export * from './ProtectedRoute';

import ProtectedRoute from './ProtectedRoute';

import {
  superadminUserAuthenticated,
  // superadminUserNotAuthenticated,
  businessadminUserAuthenticated,
  // businessadminUserNotAuthenticated,
  customerUserAuthenticated,
} from './routeValidation';


export {
  superadminUserAuthenticated,
  // superadminUserNotAuthenticated,
  businessadminUserAuthenticated,
  // businessadminUserNotAuthenticated,
  customerUserAuthenticated,
  // customerUserNotAuthenticated,
  ProtectedRoute,
};
