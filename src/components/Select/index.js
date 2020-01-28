import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Select = ({ label, values = [], name, handleChange, selectedValue }) => {
  const updateFormValue = (event) => {
    const value = event.target.value;
    handleChange(name, value);
  };

  return (
    <div className="select">
      <select 
        className="select__select"  
        value={selectedValue}
        onChange={updateFormValue}
        disabled={!values.length}
        required
      >
        <option style={{ display: 'none' }} />
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
  handleChange: PropTypes.func,
  selectedValue: PropTypes.string,
};

export default Select;
