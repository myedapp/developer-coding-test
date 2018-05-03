
export const UserTypeEnum = {
  handelAdmin: 'HandleAdmin',
  residentialCustomer: 'ResidentialCustomer',
  businessCustomer: 'BusinessCustomer',
  businessContractor: 'BusinessContractor',
  driver: 'Driver',
};

// export const UserTypeUrlEnum = {
//   admin: '/admin',
//   residentialCustomer: 'res-customers',
//   businessCustomer: 'bus-customers',
//   businessAdminCustomer: 'bus-admin-customers',
//   contractor: 'contractor',
//   driver: 'driver',
// };

export const UserTypeDefs = {
  handelAdmin: {
    label: 'myEdOnline Admin',
    // url: '/admin',
    url: 'res-customers', // for test only
    name: 'admin',
  },
  residentialCustomer: {
    label: 'Residential Customer',
    url: 'res-customers',
    name: 'residentialCustomer',
  },
  businessCustomer: {
    label: 'Business Customer',
    url: 'bus-customers',
    name: 'businessCustomer',
  },
  businessContractor: {
    label: 'Business Contractor',
    // url: 'contractor',
    url: 'res-customers', // for test only
    name: 'contractor',
  },
  driver: {
    label: 'Driver',
    // url: 'driver',
    url: 'res-customers', // for test only
    name: 'driver',
  },
};
