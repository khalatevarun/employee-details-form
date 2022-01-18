const form = document.querySelector('#details');

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
  // e.preventDefault();
  // switch (e.target.id) {
  //   case 'firstname':
  //     checkName(e.target);
  //     break;
  //   case 'lastname':
  //     checkName(e.target);
  //     break;
  //   case 'otherdetails':
  //     checkName(e.target);
  //     break;
  // }
  e.preventDefault();
  checkName(e.target, e);
}
