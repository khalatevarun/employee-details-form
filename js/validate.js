const checkname = (element) => {
  let valid = false;

  const currentEl = element.value.trim();

  if (!isRequired(username)) {
    showError(element, 'Username cannot be blank.');
  } else if (!isBetween(username.length, min, max)) {
  } else {
    showSuccess(element);
    valid = true;
  }
  return valid;
};
