const UserTypeEnum = {
  SUPERADMIN: 'SUPERADMIN',
  BUSINESSADMIN: 'BUSINESSADMIN',
  CUSTOMER: 'CUSTOMER',
  GUEST: 'GUEST',

  RESIDENTIAL_CUSTOMER: 'residentialCustomer',
  BUSINESS_CUSTOMER: 'businessCustomer',
  BUSINESS_ADMIN_CUSTOMER: 'businessAdminCustomer',
  CONTRACTOR: 'contractor',
  DRIVER: 'DRIVER',
};

Object.freeze(UserTypeEnum);

const UserRedirectPathEnum = {
  SUPERADMIN: '/admin/profile',
  BUSINESSADMIN: '/business/dashboard',
  CUSTOMER: '/customer/dashboard',
  GUEST: '/login',
};

Object.freeze(UserRedirectPathEnum);

export { UserTypeEnum, UserRedirectPathEnum };
