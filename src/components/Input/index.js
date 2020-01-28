import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Input = ({ label, name, handleChange, value = '', error, formSubmitted }) => {
  const updateFormValue = (event) => {
    const { value } = event.target;
    handleChange(name, value);
  }
  
  return (
    <div className="input">
      <input 
        className="input__input"
        onChange={updateFormValue}
        value={value}
        required
      />
      <div 
        className="input__hightlight-bar"
      />
      <label 
        className="input__label"
      >
        { label }
      </label>
      <div className="input__error-msg">
        { formSubmitted && error } 
      </div>
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  handleChange: PropTypes.func,
  error: PropTypes.string,
  formSubmitted: PropTypes.bool,
};

export default Input;
