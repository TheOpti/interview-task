import React from 'react';
import { shallow } from 'enzyme';
import FormValueDisplay from './index';

describe('FormValueDisplay', () => {
  it('should render correctly without crashing', () => {
    const wrapper = shallow(<FormValueDisplay />);

    expect(wrapper.find('div.form-value-display').length).toEqual(1);
    expect(wrapper.find('div.form-value-display__border').length).toEqual(1);
    expect(wrapper.find('pre').length).toEqual(1);
  });

  it ('should render passed data correctly between <pre> tags', () => {
      const data = { foo: 'bar', baz: 123 };
     
      const wrapper = shallow(<FormValueDisplay data={data} />);
      const content = wrapper.find('pre').text();
      const parsedContent = JSON.stringify(JSON.parse(content))

      expect(parsedContent).toEqual(JSON.stringify(data));
  });
});