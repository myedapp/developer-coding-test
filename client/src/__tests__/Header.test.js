import React from 'react';
import { shallow } from '../enzyme';
import Header from '../components/Header';

describe('<Header />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Header />);
  });

  it('Should render header', () => {
    const headerTag = component.find('header');
    expect(headerTag.length).toBe(1);
  });

  it('Should render header wrap', () => {
    const headerWrap = component.find('.Header_wrap');
    expect(headerWrap.length).toBe(1);
  });

  it('Should render header h1', () => {
    const h1 = component.find('h1');
    expect(h1.length).toBe(1);
  });
});
