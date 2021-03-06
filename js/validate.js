//check if either of status is selected

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

//check if either of gender is selected

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

//check if term and conditions are accepted

const checkTerms = () => {
  let valid = true;
  if (!termsEl.checked) {
    valid = false;
    showError(termsEl, 'Please accept term and conditions');
    return valid;
  }
  showSuccess(termsEl);
  return valid;
};

//check whether the input elements are empty or not

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

// check if the input for names satisfies the validation condition

const checkName = (nameEl, e = null) => {
  let valid = false;
  const currentName = nameEl.value;
  if (!isRequired(currentName)) {
    showError(nameEl, `${nameEl.name} cannot be blank.`);
  } else if (nameEl.type !== 'textarea' && /[^a-zA-Z]/.test(currentName)) {
    e.target.value = e.target.value.slice(0, -1);
  } else {
    showSuccess(nameEl);
    valid = true;
  }
  return valid;
};
