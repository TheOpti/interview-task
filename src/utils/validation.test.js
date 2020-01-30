import { validate, VALIDATION_ERRORS } from './validation';

describe('validation', () => {
  it('should return an empty error if form fields are correct ', () => {
    const formData = {
      name: 'Name',
      nickname: 'foo',
      email: 'bar@baz.com',
      field: 'Frontend',
      position: 'Developer',
    };

    const errors = validate(formData);
    expect(errors).toEqual({});
  });

  it('should return all errors when formData is empty', () => {
    const emptyFormData = {}

    const expectedValidationErrors = {
      name: VALIDATION_ERRORS.REQUIRED_FIELD,
      nickname: VALIDATION_ERRORS.REQUIRED_FIELD,
      email: VALIDATION_ERRORS.REQUIRED_FIELD,
      field: VALIDATION_ERRORS.REQUIRED_FIELD,
      position: VALIDATION_ERRORS.REQUIRED_FIELD,
    }

    const errors = validate(emptyFormData);
    expect(errors).toEqual(expectedValidationErrors);
  });

  it('should return error for incorrect email', () => {
    const formData = {
      name: 'Name',
      nickname: 'foo',
      email: 'barbarbar',
    };

    const expectedErrors = {
      email: VALIDATION_ERRORS.INCORRECT_EMAIL,
      field: VALIDATION_ERRORS.REQUIRED_FIELD,
      position: VALIDATION_ERRORS.REQUIRED_FIELD
    };

    const errors = validate(formData);
    expect(errors).toEqual(expectedErrors);
  });
});