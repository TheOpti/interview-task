const VALIDATION_ERRORS = {
  REQUIRED_FIELD: 'This field is required',
  INCORRECT_EMAIL: 'This is not a correct email',
}

const validate = (formData) => {
  const errors = {};

  if (!formData.name) {
    errors.name = VALIDATION_ERRORS.REQUIRED_FIELD;
  }

  if (!formData.nickname) {
    errors.nickname = VALIDATION_ERRORS.REQUIRED_FIELD;
  }

  if (!formData.email) {
    errors.email = VALIDATION_ERRORS.REQUIRED_FIELD;
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = VALIDATION_ERRORS.INCORRECT_EMAIL;
  }

  if (!formData.field) {
    errors.field = VALIDATION_ERRORS.REQUIRED_FIELD;
  }

  if (!formData.position) {
    errors.position = VALIDATION_ERRORS.REQUIRED_FIELD;
  }

  return errors;
};

export {
  validate,
  VALIDATION_ERRORS,
};