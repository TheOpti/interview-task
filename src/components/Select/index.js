import React from 'react';
import './styles.css';

const Select = ({ label, values }) => {
  return (
    <div className="select">
      <select className="select__select" required>
        <option value="" disabled selected />
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

export default Select;
