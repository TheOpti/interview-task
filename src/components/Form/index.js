import React, { PureComponent } from 'react';
import Button from '../Button';
import Input from '../Input';
import'./styles.css';

class Form extends PureComponent {
  submitForm = () => {
    console.log('Submit successful');
  };

  render() {
    return (
      <div className="form">
        <h1>
          Form
        </h1>
        <Input 
          label="Name"
        />
        <Button 
          label="Submit"
          onClickHandler={this.submitForm}
        />
      </div>
    )
  }
}

export default Form;
