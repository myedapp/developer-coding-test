import isAuthenticated from './isAuthenticated';
import { UserTypeEnum } from '../../constants/routesConfig';

/**
 * routes conditions for routes validation
 *
 */

// Super admin
const superadminUserAuthenticated = isAuthenticated(UserTypeEnum.SUPERADMIN);

// const superadminUserNotAuthenticated = isAuthenticated(
//   UserTypeEnum.SUPERADMIN,
//   true,
// );

// Business admin
const businessadminUserAuthenticated = isAuthenticated(UserTypeEnum.BUSINESSADMIN);

// const businessadminUserNotAuthenticated = isAuthenticated(
//   UserTypeEnum.BUSINESSADMIN,
//   true,
// );

// Genernal customer
const customerUserAuthenticated = isAuthenticated(UserTypeEnum.CUSTOMER);

// const customerUserNotAuthenticated = isAuthenticated(
//   UserTypeEnum.CUSTOMER,
// );

export {
  superadminUserAuthenticated,
  // superadminUserNotAuthenticated,
  businessadminUserAuthenticated,
  // businessadminUserNotAuthenticated,
  customerUserAuthenticated,
  // customerUserNotAuthenticated,
};
