import React from 'react';
import { shallow } from '../enzyme';
import Student from '../components/Student';

describe('<Student />', () => {
  let component;

  const props = {
    id: 1,
    fullname: 'Ryan Zhang',
    quests: []
  };

  const click = jest.fn();

  beforeEach(() => {
    component = shallow(<Student {...props} />);
  });

  it('should render student wrap', () => {
    const studentWrap = component.find('.Student_wrap');
    expect(studentWrap.length).toBe(1);
  });

  it('should render heading tag and fullname', () => {
    const fullname = component.find('h5');
    expect(fullname.length).toBe(1);
    expect(fullname.text()).toEqual('Ryan Zhang');
  });

  it('should render photo', () => {
    const photo = component.find('.Student_photo');
    expect(photo.length).toBe(1);
  });

  it('should render button', () => {
    const button = component.find('button');
    expect(button.length).toBe(1);
  });

  it('should dispach click evnet', () => {
    component.find('button').simulate('click');
    const quest = component.find('article');
    expect(quest.length).toBe(1);
  });
});
