import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Input = ({ label, name, handleChange, value = '', error, formSubmitted }) => {
  const [visited, setVisited] = useState(false);

  const updateFormValue = (event) => {
    const { value } = event.target;
    handleChange(name, value);
  };

  const onBlurHandler = () => {
    setVisited(true);
  };

  const canShowError = visited || formSubmitted;
  
  return (
    <div className="input">
      <input 
        className="input__input"
        onChange={updateFormValue}
        onBlur={onBlurHandler}
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
        { canShowError && error } 
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
