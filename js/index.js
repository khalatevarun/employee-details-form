const form = document.querySelector('#details');

// dynamically generate html input elements for the form from the formItem array

function render() {
  for (let i = 0; i < formItems.length; i++) {
    var item = document.createElement('div');
    item.setAttribute('class', 'form-item');
    let field;
    switch (formItems[i].type) {
      case 'text':
        field = createTextInput(item, formItems[i]);
        break;
      case 'radio':
        field = createRadioInput(item, formItems[i]);
        break;
      case 'textarea':
        field = createTextArea(item, formItems[i]);
        break;
      case 'checkbox':
        field = createCheckboxInput(item, formItems[i]);
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

// store the elements for validation in variables

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

//add event listners to elements

form.addEventListener('submit', handleSubmit);
form.addEventListener('input', handleFormInput);
resetBtn.addEventListener('click', handleReset);
marriedEl.addEventListener('click', handleStatus);
unmarriedEl.addEventListener('click', handleStatus);

function handleSubmit(e) {
  // prevent the form from submitting
  e.preventDefault();

  // validate form
  let isFirstNameValid = checkName(firstnameEl),
    isLastNameValid = checkName(lastnameEl),
    isSpouseNameValid = marriedEl.checked ? checkName(spouseEl) : true,
    isOtherDetailsValid = checkName(otherdetailsEl),
    isGenderValid = checkGender(),
    isStatusValid = checkStatus(),
    isTermsValid = checkTerms();

  let isFormValid =
    isFirstNameValid &&
    isLastNameValid &&
    isSpouseNameValid &&
    isOtherDetailsValid &&
    isGenderValid &&
    isStatusValid &&
    isTermsValid;

  // submit to the server if the form is valid
  if (isFormValid) {
    alert('Thank You!');
  }
}

//handle reset form button click

function handleReset(e) {
  form.reset();
  const messages = document.getElementsByTagName('small');

  for (let i = 0; i < messages.length; i++) {
    // choose all elements
    messages[i].innerText = ''; // hide them
  }
  firstnameEl.focus();
}

// enable/disable "name of spouse" element based on the status selected

function handleStatus(e) {
  if (e.target.id === 'married') {
    spouseEl.disabled = false;
  } else {
    spouseEl.disabled = true;
    spouseEl.value = '';
    showSuccess(spouseEl);
  }
}

// give instant feedback for input by checking validation conditions on every input

function handleFormInput(e) {
  e.preventDefault();
  checkName(e.target, e);
}
