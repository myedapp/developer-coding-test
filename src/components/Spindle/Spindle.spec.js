import { shallow } from 'enzyme'
import React from 'react'

import Spindle from './Spindle'

test('it shows the correct label when passed as a prop', () => {
  const spindle = shallow(<Spindle label='This is my label' />)
  expect(spindle.find('.Spindle__label').text()).toBe('This is my label')
})
