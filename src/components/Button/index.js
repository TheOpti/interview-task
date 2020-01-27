import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Button = ({ label, onClickHandler }) => {
  return (
    <button 
      onClick={onClickHandler}
      className="button"
      type="button"
    >
      { label }
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  onClickHandler: PropTypes.func,
};

export default Button;
