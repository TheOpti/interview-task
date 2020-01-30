import React from 'react';
import { shallow } from 'enzyme';
import Select from './index';

describe('InSelectput', () => {
  it('should render select with no props without crashing', () => {
    const wrapper = shallow(<Select />);
   
    expect(wrapper.find('div.select').length).toEqual(1);
    expect(wrapper.find('select.select__select').length).toEqual(1);
    expect(wrapper.find('label.select__label').length).toEqual(1);
  });

  it('should show validation error after blur event', () => {
    const errorMessage = 'Example error message';
    const wrapper = shallow(<Select error={errorMessage} />);

    expect(wrapper.find('.select__error-msg').contains(errorMessage)).toEqual(false);
    wrapper.find('select').simulate('blur');
    expect(wrapper.find('.select__error-msg').contains(errorMessage)).toEqual(true);
  });

  it('should not show an error if form was not submitted and there was no blur event', () => {
    const errorMessage = 'Example error message';
    const wrapper = shallow(<Select error={errorMessage} />);

    expect(wrapper.find('.select__error-msg').contains(errorMessage)).toEqual(false);
  });

  it('should show validation error if form was submitted', () => {
    const errorMessage = 'Example error message';
    const wrapper = shallow(<Select error={errorMessage} formSubmitted={true} />);
    expect(wrapper.find('.select__error-msg').contains(errorMessage)).toEqual(true);
  });

  it('should change form value when onChange event is fired', () => {
    const mockFunction = jest.fn();
    const fieldName = 'inputFieldName';
    const value = '123';

    const event = { target: { value } };

    const wrapper = shallow(
      <Select 
        onClickHandler={mockFunction}
        name={fieldName}
        handleChange={mockFunction}  
      />
    );

    wrapper.find('select').simulate('change', event);
    expect(mockFunction).toHaveBeenCalledWith(fieldName, value);
  });
});