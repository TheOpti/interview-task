import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Select = ({ label, values = [], name, handleChange, selectedValue, error, formSubmitted }) => {
  const [visited, setVisited] = useState(false);

  const updateFormValue = (event) => {
    const value = event.target.value;
    handleChange(name, value);
  };

  const onBlurHandler = () => {
    setVisited(true);
  };

  const canShowError = visited || formSubmitted;

  return (
    <div className="select">
      <select 
        className="select__select"  
        value={selectedValue}
        onChange={updateFormValue}
        onBlur={onBlurHandler}
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
      <div className="select__error-msg">
        { canShowError && error } 
      </div>
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
  error: PropTypes.string,
  formSubmitted: PropTypes.bool,
};

export default Select;
