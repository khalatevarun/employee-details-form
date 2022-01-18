const formItems = [
  {
    name: 'FirstName',
    label: 'FirstName',
    id: 'firstname',
    autocomplete: 'off',
    type: 'text',
  },
  {
    name: 'LastName',
    label: 'LastName',
    id: 'lastname',
    autocomplete: 'off',

    type: 'text',
  },
  {
    label: 'Gender',
    options: [
      { name: 'Gender', id: 'male', value: 'MALE' },
      { name: 'Gender', id: 'female', value: 'FEMALE' },
    ],
    type: 'radio',
  },
  {
    label: 'Marital Status',
    options: [
      { name: 'status', id: 'married', value: 'Married' },
      { name: 'status', id: 'unmarried', value: 'Unmarried' },
    ],
    type: 'radio',
  },
  {
    name: 'Name of Spouse',
    label: 'Name of Spouse',
    id: 'spouse',
    type: 'text',
  },
  {
    name: 'Other Details',
    label: 'Other Details',
    id: 'otherdetails',
    type: 'textarea',
  },
  {
    type: 'checkbox',
    label: 'I accept the terms and conditions',
    id: 'tnc',
    name: 'tnc',
  },
  {
    type: 'button',
    value: 'Reset',
    id: 'reset-button',
    class: 'btn reset',
  },
  {
    type: 'submit',
    value: 'Submit',
    class: 'btn',
  },
];
