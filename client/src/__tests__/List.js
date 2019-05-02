import React from 'react';
import { shallow } from '../enzyme';
import List from '../components/List';

describe('<List />', () => {
  let component;

  const props = {
    items: [1, 2, 3],
    tagName: 'Student'
  };

  beforeEach(() => {
    component = shallow(<List {...props} />);
  });

  it('should render list wrap', () => {
    const listWrap = component.find('.List_wrap');
    expect(listWrap.length).toBe(1);
  });

  it('should render Student as item', () => {
    const student = component.find('Student');
    expect(student.length).toBe(3);
  });
});
