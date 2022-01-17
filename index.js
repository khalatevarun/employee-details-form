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

const form = document.querySelector('#details');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (validateForm()) {
    alert('Thank You!');
  }
});

resetBtn.addEventListener('click', function (e) {
  form.reset();
  firstnameEl.focus();
});

marriedEl.addEventListener('click', function (e) {
  spouseEl.disabled = false;
});
unmarriedEl.addEventListener('click', function (e) {
  spouseEl.disabled = true;
  spouseEl.value = '';
});

const validateForm = () => {
  if (!isRequired(firstnameEl.value.trim(), firstnameEl)) {
    return false;
  } else {
    if (!checkWhiteSpace(firstnameEl.value, firstnameEl)) {
      return false;
    }
  }
  if (!isRequired(lastnameEl.value.trim(), lastnameEl)) {
    return false;
  } else {
    if (!checkWhiteSpace(lastnameEl.value, lastnameEl)) {
      return false;
    }
  }
  if (!checkgender()) {
    return false;
  }
  if (!checkstatus()) {
    return false;
  }
  if (marriedEl.checked) {
    if (!isRequired(spouseEl.value.trim(), spouseEl)) {
      return false;
    } else {
      if (!checkWhiteSpace(spouseEl.value, spouseEl)) {
        return false;
      }
    }
  }
  if (!isRequired(otherdetailsEl.value, otherdetailsEl)) {
    return false;
  }
  if (!checkTerms()) {
    return false;
  }

  return true;
};

const isRequired = (value, el) => {
  let valid = false;
  if (value !== '') {
    valid = true;
  } else {
    alert(`Please enter ${el.name}`);
    el.focus();
  }
  return valid;
};

const checkWhiteSpace = (value, el) => {
  let valid = false;
  if (value.indexOf(' ') >= 0) {
    alert(`${el.name} should not contain any white spaces`);
    el.focus();
  } else {
    valid = true;
  }
  return valid;
};

const checkstatus = () => {
  let valid = true;
  if (!marriedEl.checked && !unmarriedEl.checked) {
    valid = false;
    alert('Please enter marital status');
  }
  return valid;
};

const checkgender = () => {
  let valid = true;
  if (!maleEl.checked && !femaleEl.checked) {
    valid = false;
    alert('Please enter gender');
  }
  return valid;
};

const checkTerms = () => {
  let valid = true;
  if (!termsEl.checked) {
    valid = false;
    alert('Please accept term and conditions');
  }
  return valid;
};
