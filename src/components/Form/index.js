import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { updateFormData } from '../../actions';

import Button from '../Button';
import Input from '../Input';
import Select from '../Select';
import FormValueDisplay from '../FormValueDisplay';
import {
  fields,
  positions,
} from '../../utils/formData';
import { validate } from '../../utils/validation';

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
      const { updateFormData, history } = this.props;
      updateFormData(formData);
      history.push('/success');
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

const mapDispatchToProps = { updateFormData };

const componentWithRedux = connect(null, mapDispatchToProps)(Form)
const componentWithRouter = withRouter(componentWithRedux);

export default componentWithRouter;
