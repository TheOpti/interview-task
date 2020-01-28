import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormValueDisplay from '../../components/FormValueDisplay';

import './styles.css';

class Success extends Component {
  render() {
    const { formDataFromRedux } = this.props;

    return (
      <div className="success">
        <h2>
          This is success page
        </h2>
        <FormValueDisplay
          data={formDataFromRedux}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  formDataFromRedux: state.formData,
});

export default connect(mapStateToProps)(Success);
