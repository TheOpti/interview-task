import React from 'react';
import { shallow } from 'enzyme';
import Button from './index';

describe('Button', () => {
  it('should render button with no props without crashing', () => {
    const wrapper = shallow(<Button />);
    const button = <button className="button" type="button"></button>

    expect(wrapper.contains(button)).toEqual(true);
  });
  
  it('renders button with given label as a property', () => {
    const wrapper = shallow(<Button label="label" />);

    expect(wrapper.contains('label')).toEqual(true);
  });

  it('should call a function when button is clicked and onClickHandler is passed', () => {
    const mockFunction = jest.fn();

    const wrapper = shallow(<Button onClickHandler={mockFunction} />);
    wrapper.find('button').simulate('click');
    expect(mockFunction).toHaveBeenCalled();
  });

});


