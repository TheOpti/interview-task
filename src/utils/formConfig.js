const formConfig = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
  },
  {
    name: 'nickname',
    label: 'Nickname',
    type: 'text',
  },
  {
    name: 'email',
    label: 'Email',
    type: 'text',
  },
  {
    name: 'field',
    label: 'Field',
    type: 'select',
    options: [
      {
        value: 'it',
        label: 'IT',
      },
      {
        value: 'product',
        label: 'Product',
      },
    ]
  },
  {
    name: 'position',
    label: 'Position',
    type: 'select',
    options: [
      {
        value: 'junior',
        label: 'Junior',
      },
      {
        value: 'senior',
        label: 'Senior',
      },
    ],
  },
];

export {
  formConfig
};
