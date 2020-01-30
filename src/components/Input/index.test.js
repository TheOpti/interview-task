import React from 'react';
import { shallow } from 'enzyme';
import Input from './index';

describe('Input', () => {
  it('should render input with no props without crashing', () => {
    const wrapper = shallow(<Input />);
   
    expect(wrapper.find('div.input').length).toEqual(1);
    expect(wrapper.find('input.input__input').length).toEqual(1);
    expect(wrapper.find('label.input__label').length).toEqual(1);
  });

  it('should show validation error after blur event', () => {
    const errorMessage = 'Example error message';
    const wrapper = shallow(<Input error={errorMessage} />);

    expect(wrapper.find('.input__error-msg').contains(errorMessage)).toEqual(false);
    wrapper.find('input').simulate('blur');
    expect(wrapper.find('.input__error-msg').contains(errorMessage)).toEqual(true);
  });

  it('should not show an error if form was not submitted and there was no blur event', () => {
    const errorMessage = 'Example error message';
    const wrapper = shallow(<Input error={errorMessage} />);

    expect(wrapper.find('.input__error-msg').contains(errorMessage)).toEqual(false);
  });

  it('should show validation error if form was submitted', () => {
    const errorMessage = 'Example error message';
    const wrapper = shallow(<Input error={errorMessage} formSubmitted={true} />);
    expect(wrapper.find('.input__error-msg').contains(errorMessage)).toEqual(true);
  });

  it('should change form value when onChange event is fired', () => {
    const mockFunction = jest.fn();
    const fieldName = 'inputFieldName';
    const value = '123';

    const event = { target: { value } };

    const wrapper = shallow(
      <Input 
        onClickHandler={mockFunction}
        name={fieldName}
        handleChange={mockFunction}  
      />
    );

    wrapper.find('input').simulate('change', event);
    expect(mockFunction).toHaveBeenCalledWith(fieldName, value);
  });
});