import { shallow } from 'enzyme'
import React from 'react'

import Logo from './Logo'

test('logo displays the correct text', () => {
  const logo = shallow(<Logo />)
  expect(logo.find('.Logo').exists()).toBeTruthy()
  expect(logo.find('.Logo').text()).toBe('myEd')
})