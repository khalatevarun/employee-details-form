const formItems = [
  {
    name: 'FirstName',
    label: 'FirstName',
    id: 'firstname',
    type: 'text',
  },
  {
    name: 'LastName',
    label: 'LastName',
    id: 'lastname',
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
    name: 'Spouse',
    label: 'Name of Spouse',
    id: 'spouse',
    type: 'text',
  },
  {
    name: 'Other Details',
    label: 'Other Details',
    id: 'otherdetails',
    type: 'text',
  },
  {
    type: 'button',
    value: 'Reset',
    id: 'reset-button',
    class: 'btn',
  },
  {
    type: 'submit',
    value: 'Submit',
    class: 'btn',
  },
];

export { formItems };
