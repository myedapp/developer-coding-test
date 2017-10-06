import { shallow } from 'enzyme'
import React from 'react'

import Tag from './Tag'

test('it shows the correct label when passed as a child', () => {
  const tag = shallow(<Tag children='This is my label' />)
  expect(tag.find('.Tag').text()).toBe('This is my label')
})

test('it adds the active class when the active prop is passed in positive', () => {
  const tag = shallow(<Tag active={true} />)
  expect(tag.find('.Tag').getElement().props.className).toEqual('Tag Tag--active')
})

test('it does not add the active class when the active prop is passed in the negative', () => {
  const tag = shallow(<Tag active={null} />)
  expect(tag.find('.Tag').getElement().props.className).toEqual('Tag')
})
