import React from 'react';
import { shallow } from '../enzyme';
import Quest from '../components/Quest';

describe('<Quest />', () => {
  let component;

  const props = {
    quest: {
      name: 'Test quest'
    },
    mark: {
      completion: 80,
      mark: 80,
      submitted: true
    }
  };

  beforeEach(() => {
    component = shallow(<Quest {...props} />);
  });

  it('should render quest wrap', () => {
    const questWrap = component.find('.Quest_item-wrap');
    expect(questWrap.length).toBe(1);
  });

  it('should render quest name', () => {
    const questName = component.find('h6');
    expect(questName.length).toBe(1);
    expect(questName.text()).toEqual('Test quest');
  });

  it('should render submmitted', () => {
    const submmitted = component.find('.Quest_mark-submitted');
    expect(submmitted.length).toBe(1);
    expect(submmitted.text()).toEqual('Submitted: Yes');
  });

  it('should render mark', () => {
    const mark = component.find('.Quest_mark-mark');
    expect(mark.length).toBe(1);
    expect(mark.text()).toEqual('Mark: 80');
  });

  it('should render completion', () => {
    const completion = component.find('.Quest_progress-bar');
    expect(completion.length).toBe(1);
  });
});
