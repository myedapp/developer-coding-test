import React from 'react';
import { shallow } from '../enzyme';
import Student from '../components/Student/Student';

describe('<Student />', () => {
  let component;

  const props = {
    id: 1,
    fullname: 'Ryan Zhang',
    quests: []
  };

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
});
