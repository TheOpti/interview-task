import React, { PureComponent } from 'react';
import Button from '../Button';
import Input from '../Input';
import Select from '../Select';
import FormValueDisplay from '../FormValueDisplay';
import {
  fields,
  positions,
} from './form-data';

import'./styles.css';

class Form extends PureComponent {
  state = {
    formSubmitted: false,
    formData: {},
    errors: {},
  };

  handleChange = (name, value) => {
    const { formData } = this.state;
    const updatedForm = Object.assign({}, formData, { [name]: value });

    this.setState({
      formData: updatedForm,
    });
  };

  validate = () => {
    const { formData } = this.state;
    const errors = {};

    if (!formData.name) {
      errors.name = 'This field is required';
    }

    if (!formData.nickname) {
      errors.nickname = 'This field is required';
    }

    if (!formData.email) {
      errors.nickname = 'This field is required';
    }

    if (!formData.field) {
      errors.nickname = 'This field is required';
    }

    if (!formData.position) {
      errors.nickname = 'This field is required';
    }

    this.setState({ errors });
  }

  submitForm = () => {
    this.setState({ formSubmitted: true });
    this.validate();
  };

  render() {
    const { formData } = this.state;
    const { 
      name,
      nickname,
      email,
      field,
      position,
    } = formData;

    const positionFields = positions[field] || [];

    return (
      <div className="form">
        <h1>
          Form
        </h1>
        <Input 
          label="Name"
          name="name"
          handleChange={this.handleChange}
          value={name}
        />
        <Input 
          label="Nickname"
          name="nickname"
          handleChange={this.handleChange}
          value={nickname}
        />
        <Input 
          label="Email"
          name="email"
          handleChange={this.handleChange}
          value={email}
        />
        <Select 
          label="Field"
          name="field"
          handleChange={this.handleChange}
          values={fields}
          selectedValue={field}
        />
       <Select 
          label="Position"
          name="position"
          handleChange={this.handleChange}
          values={positionFields}
          selectedValue={position}
        />
        <Button
          label="Submit"
          onClickHandler={this.submitForm}
        />
        <FormValueDisplay 
          data={formData}
        />
      </div>
    );
  }
}

export default Form;
