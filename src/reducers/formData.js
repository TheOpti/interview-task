import { UPDATE_FORM_DATA } from '../actionTypes';

const initialState = {
  data: {},
};

export const formData = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM_DATA:
      return { data: { ...action.formData } };
    default:
      return state;
  }
};
