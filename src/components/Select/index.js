import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Select = ({ label, values, selectedValue }) => {
  return (
    <div className="select">
      <select 
        className="select__select"  
        value={selectedValue}
        required
      >
        <option value="default" disabled />
        { values.map((value) => (
          <option value={value.value} key={value.value}>
            { value.label }
          </option>
        ))}
      </select>
      <span className="select__hightlight-bar" />
      <label className="select__label">
        { label }
      </label>
    </div>
  );
}

Select.propTypes = {
  label: PropTypes.string,
  values: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    }),
  ),
  selectedValue: PropTypes.string,
};

export default Select;
