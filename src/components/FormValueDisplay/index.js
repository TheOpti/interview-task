import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const FormValueDisplay = ({ data }) => {
  return (
    <div className="form-value-display">
      <div className="form-value-display__border" />
      <pre>
        { JSON.stringify(data, 2, 2) }
      </pre>
    </div>
  )
}

FormValueDisplay.propTypes = {
  data: PropTypes.object,
};

export default FormValueDisplay;
