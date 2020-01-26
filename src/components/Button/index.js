import React from 'react';
import './styles.css';

const Button = ({ label, onClickHandler }) => {
  return (
    <button 
      onClick={onClickHandler}
      className="button"
    >
      { label }
    </button>
  )
}

export default Button;
