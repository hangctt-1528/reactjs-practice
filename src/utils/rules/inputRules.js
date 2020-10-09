const rules = [
  {
    field: 'name',
    method: 'isEmpty',
    validWhen: false,
    message: 'The name field is required.',
  },
  {
    field: 'name',
    method: 'isLength',
    args: [{min: 5}],
    validWhen: true,
    message: 'The name must be at least 5 characters.',
  },
  {
    field: 'email',
    method: 'isEmpty',
    validWhen: false,
    message: 'The email field is required.',
  },
  {
    field: 'email',
    method: 'isEmail',
    validWhen: true,
    message: 'The email must be a valid email address.',
  }
];

export default rules;