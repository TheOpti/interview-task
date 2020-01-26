import React from 'react';
import './styles.css';

const Input = ({ label }) => {
  return (
    <div className="input">
      <input 
        className="input__input"
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
    </div>
  )
}

export default Input;
