import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { updateFormData } from '../../actions';

import Button from '../Button';
import Input from '../Input';
import Select from '../Select';
import FormValueDisplay from '../FormValueDisplay';
import { formConfig } from '../../utils/formConfig';
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

    const errors = validate(formData);
    const formCorrect = this.isFormCorrect(errors);

    if (formCorrect) {
      const { updateFormData, history } = this.props;
      updateFormData(formData);
      history.push('/success');
    }
  };

  render() {
    const { formData, formSubmitted } = this.state;
    const errors = validate(formData);

    return (
      <div className="form">
        <h1>
          Form
        </h1>
        {
          formConfig.map((formElement) => {
            const isTextElem = formElement.type === 'text';
            const Component = isTextElem ? Input : Select;

            const valueProps = isTextElem 
              ? { value: formData[formElement.name] } 
              : { selectedValue: formData[formElement.name], values: formElement.options };

            return (
              <Component 
                key={formElement.name}
                label={formElement.label}
                name={formElement.name}
                handleChange={this.handleChange}
                error={errors[formElement.name]}
                formSubmitted={formSubmitted}
                {...valueProps}
              />
            )
          })
        }
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
