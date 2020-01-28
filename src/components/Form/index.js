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
  };

  handleChange = (name, value) => {
    const { formData } = this.state;
    const updatedForm = Object.assign({}, formData, { [name]: value });

    this.setState({
      formData: updatedForm,
    });
  };

  validate = (formData) => {
    const errors = {};

    if (!formData.name) {
      errors.name = 'This field is required';
    }

    if (!formData.nickname) {
      errors.nickname = 'This field is required';
    }

    if (!formData.email) {
      errors.email = 'This field is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'This is not a correct email';
    }

    if (!formData.field) {
      errors.field = 'This field is required';
    }

    if (!formData.position) {
      errors.position = 'This field is required';
    }

    return errors;
  }

  isFormCorrect = (errors = {}) => {
    const errorsNumber = Object.keys(errors).length;
    return errorsNumber === 0;
  }

  submitForm = () => {
    this.setState({ formSubmitted: true });
    const { formData } = this.state;

    const errors = this.validate(formData);
    const formCorrect = this.isFormCorrect(errors);

    if (formCorrect) {
      alert(JSON.stringify(formData, 2, 2));
    }
  };

  render() {
    const { formData, formSubmitted } = this.state;
    const { 
      name,
      nickname,
      email,
      field,
      position,
    } = formData;

    const positionFields = positions[field] || [];
    const errors = this.validate(formData);

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
          error={errors.name}
          formSubmitted={formSubmitted}
        />
        <Input 
          label="Nickname"
          name="nickname"
          handleChange={this.handleChange}
          value={nickname}
          error={errors.nickname}
          formSubmitted={formSubmitted}
        />
        <Input 
          label="Email"
          name="email"
          handleChange={this.handleChange}
          value={email}
          error={errors.email}
          formSubmitted={formSubmitted}
        />
        <Select 
          label="Field"
          name="field"
          handleChange={this.handleChange}
          values={fields}
          selectedValue={field}
          error={errors.field}
          formSubmitted={formSubmitted}
        />
       <Select 
          label="Position"
          name="position"
          handleChange={this.handleChange}
          values={positionFields}
          selectedValue={position}
          error={errors.position}
          formSubmitted={formSubmitted}
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
