import React, { PureComponent } from 'react';
import Button from '../Button';
import Input from '../Input';
import Select from '../Select';
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
        <Input 
          label="Nickname"
        />
        <Input 
          label="Email"
        />
        <Select 
          label="Field"
          values={[]}
        />
        <Select 
          label="Position"
          values={[]}
        />
        <Button
          label="Submit"
          onClickHandler={this.submitForm}
        />
      </div>
    );
  }
}

export default Form;
