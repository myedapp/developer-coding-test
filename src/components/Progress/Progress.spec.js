import { shallow } from 'enzyme'
import React from 'react'

import Progress from './Progress'

test('it shows the correct label when passed as a prop', () => {
  const progress = shallow(<Progress label='This is my label' />)
  expect(progress.find('.Progress__label').text()).toBe('This is my label')
})

test('it shows the default, empty label when the label prop is not passed', () => {
  const progress = shallow(<Progress />)
  expect(progress.find('.Progress__label').text()).toBe('')
})

test('it shows a warning when a string is not passed as a label prop', () => {
  let warning 
  console.error = jest.fn(warn => {
    warning = warn
    throw new Error(warn)
  })

  expect(() => shallow(<Progress label={44} />)).toThrow()
  expect(warning).toMatch('Invalid prop `label`')
})

test('it sets the correct left value for the pin in relation to the value prop', () => {
  const progress = shallow(<Progress value={50} />)
  expect(progress.find('.Progress__pin').getElement().props.style.left).toBe('50%')
})

test('it sets the correct left value for the pin in relation to the value prop', () => {
  const progress = shallow(<Progress value={10} />)
  expect(progress.find('.Progress__pin').getElement().props.style.left).toBe('10%')
})

test('it sets the correct left value to zero when no value prop provided', () => {
  const progress = shallow(<Progress />)
  expect(progress.find('.Progress__pin').getElement().props.style.left).toBe('0%')
})