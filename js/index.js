const form = document.querySelector('#details');

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

function render() {
  for (let i = 0; i < formItems.length; i++) {
    let message = document.createElement('small');
    var item = document.createElement('div');
    item.setAttribute('class', 'form-item');
    let field;
    switch (formItems[i].type) {
      case 'text':
        field = createTextInput(item, formItems[i]);
        field.appendChild(message);
        break;
      case 'radio':
        field = createRadioInput(item, formItems[i]);
        field.appendChild(message);
        break;
      case 'textarea':
        field = createTextArea(item, formItems[i]);
        field.appendChild(message);
        break;
      case 'checkbox':
        field = createCheckboxInput(item, formItems[i]);
        field.appendChild(message);
        break;
      case 'button':
        field = createButton(item, formItems[i]);
        break;
      case 'submit':
        field = createButton(item, formItems[i]);
        break;
    }

    form.appendChild(field);
  }
}

render();

const firstnameEl = document.querySelector('#firstname');
const lastnameEl = document.querySelector('#lastname');
const spouseEl = document.querySelector('#spouse');
const otherdetailsEl = document.querySelector('#otherdetails');
const marriedEl = document.querySelector('#married');
const unmarriedEl = document.querySelector('#unmarried');
const maleEl = document.querySelector('#male');
const femaleEl = document.querySelector('#female');
const termsEl = document.querySelector('#tnc');
const resetBtn = document.querySelector('#reset-button');

form.addEventListener('submit', handleSubmit);
resetBtn.addEventListener('click', handleReset);
marriedEl.addEventListener('click', handleStatus);
unmarriedEl.addEventListener('click', handleStatus);

const checkStatus = () => {
  let valid = true;
  if (!marriedEl.checked && !unmarriedEl.checked) {
    valid = false;
    showError(marriedEl.parentElement, `Please select ${marriedEl.name}.`);
    return valid;
  }

  showSuccess(marriedEl.parentElement);
  return valid;
};

const checkGender = () => {
  let valid = true;
  if (!maleEl.checked && !femaleEl.checked) {
    valid = false;
    showError(maleEl.parentElement, `Please select ${maleEl.name}.`);
    return valid;
  }
  showSuccess(maleEl.parentElement);
  return valid;
};

// const checkTerms = () => {
//   let valid = true;
//   if (!termsEl.checked) {
//     valid = false;
//     alert('Please accept term and conditions');
//   }
//   return valid;
// };

const isRequired = (value) => (value === '' ? false : true);

const showError = (input, message) => {
  // get the form-item element
  const formField = input.parentElement;

  // show the error message
  const error = formField.querySelector('small');
  error.textContent = message;
};

const showSuccess = (input) => {
  // get the form-field element
  const formField = input.parentElement;

  // hide the error message
  const error = formField.querySelector('small');
  error.textContent = '';
};

const checkName = (nameEl) => {
  let valid = false;

  const currentName = nameEl.value.trim();

  if (!isRequired(currentName)) {
    showError(nameEl, `${nameEl.name} cannot be blank.`);
  } else if (nameEl.type !== 'textarea' && /[^a-zA-Z]/.test(currentName)) {
    showError(
      nameEl,
      `White spaces, special character and digits are not allowed`
    );
  } else {
    showSuccess(nameEl);
    valid = true;
  }
  return valid;
};

form.addEventListener('input', handleFormInput);

function createTextInput(parentDiv, currentObj) {
  let field = document.createElement(`input`);
  let label = document.createElement('label');
  label.setAttribute('for', currentObj.label);
  label.innerHTML = currentObj.label;
  for (let key in currentObj) {
    field.setAttribute(`${key}`, `${currentObj[key]}`);
  }
  parentDiv.appendChild(label);
  parentDiv.appendChild(field);

  return parentDiv;
}

function createCheckboxInput() {}

function createRadioInput(parentDiv, currentObj) {
  let p = document.createElement('p');
  p.innerHTML = currentObj.label;
  parentDiv.appendChild(p);
  for (let i = 0; i < currentObj.options.length; i++) {
    let currentOption = currentObj.options[i];
    let radioLabel = document.createElement('label');
    radioLabel.setAttribute('class', 'inline-input');
    let optionEl = document.createElement('input');
    optionEl.setAttribute('type', 'radio');
    for (let key in currentOption) {
      optionEl.setAttribute(`${key}`, `${currentOption[key]}`);
    }
    radioLabel.appendChild(optionEl);
    let value = document.createTextNode(`${currentOption.value}`);
    radioLabel.appendChild(value);
    parentDiv.appendChild(radioLabel);
  }
  return parentDiv;
}

function createTextArea(parentDiv, currentObj) {
  let field = document.createElement(`textarea`);
  let label = document.createElement('label');
  label.setAttribute('for', currentObj.label);
  label.innerHTML = currentObj.label;
  for (let key in currentObj) {
    field.setAttribute(`${key}`, `${currentObj[key]}`);
  }
  parentDiv.appendChild(label);
  parentDiv.appendChild(field);

  return parentDiv;
}

function createButton(parentDiv, currentObj) {
  let item = document.createElement('input');
  for (let key in currentObj) {
    item.setAttribute(`${key}`, `${currentObj[key]}`);
  }
  parentDiv.appendChild(item);
  return parentDiv;
}

function handleSubmit(e) {
  // prevent the form from submitting
  e.preventDefault();

  // validate form
  let isFirstNameValid = checkName(firstnameEl),
    isLastNameValid = checkName(lastnameEl),
    isSpouseNameValid = marriedEl.checked ? checkName(spouseEl) : true,
    isOtherDetailsValid = checkName(otherdetailsEl),
    isGenderValid = checkGender(),
    isStatusValid = checkStatus();

  let isFormValid =
    isFirstNameValid &&
    isLastNameValid &&
    isSpouseNameValid &&
    isOtherDetailsValid &&
    isGenderValid &&
    isStatusValid;

  // submit to the server if the form is valid
  if (isFormValid) {
    alert('Thank You!');
  }
}

function handleReset(e) {
  form.reset();
  const messages = document.getElementsByTagName('small');

  for (let i = 0; i < messages.length; i++) {
    // choose all elements
    messages[i].innerText = ''; // hide them
  }
  firstnameEl.focus();
}

function handleStatus(e) {
  if (e.target.id === 'married') {
    spouseEl.disabled = false;
  } else {
    spouseEl.disabled = true;
    spouseEl.value = '';
    showSuccess(spouseEl);
  }
}

function handleFormInput(e) {
  switch (e.target.id) {
    case 'firstname':
      checkName(e.target);
      break;
    case 'lastname':
      checkName(e.target);
      break;
    case 'otherdetails':
      checkName(e.target);
      break;
  }
}
