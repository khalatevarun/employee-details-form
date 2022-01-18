function createTextInput(parentDiv, currentObj) {
  // create input,label and small for each input
  let message = document.createElement('small');
  let field = document.createElement(`input`);
  let label = document.createElement('label');

  label.setAttribute('for', currentObj.label);
  label.innerHTML = currentObj.label;

  //set all listed attributes to the element from current formItem
  for (let key in currentObj) {
    field.setAttribute(`${key}`, `${currentObj[key]}`);
  }

  //append child elements
  parentDiv.appendChild(label);
  parentDiv.appendChild(field);
  parentDiv.appendChild(message);

  return parentDiv;
}

function createCheckboxInput(parentDiv, currentObj) {
  // create input,label and small for each checkbox
  let message = document.createElement('small');
  let field = document.createElement(`input`);
  let label = document.createElement('span');

  field.setAttribute('class', 'inline-input');
  label.setAttribute('for', currentObj.label);
  label.setAttribute('class', 'inline-input');
  label.innerHTML = currentObj.label;

  //set all listed attributes to the element from current formItem
  for (let key in currentObj) {
    field.setAttribute(`${key}`, `${currentObj[key]}`);
  }

  //append child elements
  parentDiv.appendChild(field);
  parentDiv.appendChild(label);
  parentDiv.appendChild(message);

  return parentDiv;
}

function createRadioInput(parentDiv, currentObj) {
  // create p and small for each radio
  let message = document.createElement('small');
  let p = document.createElement('p');

  p.innerHTML = currentObj.label;
  parentDiv.appendChild(p);

  for (let i = 0; i < currentObj.options.length; i++) {
    let radioLabel = document.createElement('label');
    let optionEl = document.createElement('input');

    radioLabel.setAttribute('class', 'inline-input');
    optionEl.setAttribute('type', 'radio');

    //set all listed attributes to the element from current formItem
    let currentOption = currentObj.options[i];
    for (let key in currentOption) {
      optionEl.setAttribute(`${key}`, `${currentOption[key]}`);
    }

    //append child elements
    radioLabel.appendChild(optionEl);
    let value = document.createTextNode(`${currentOption.value}`);
    radioLabel.appendChild(value);
    parentDiv.appendChild(radioLabel);
    parentDiv.appendChild(message);
  }
  return parentDiv;
}

function createTextArea(parentDiv, currentObj) {
  // create input,label and small for each textarea
  let message = document.createElement('small');
  let field = document.createElement(`textarea`);
  let label = document.createElement('label');

  label.setAttribute('for', currentObj.label);
  label.innerHTML = currentObj.label;

  //set all listed attributes to the element from current formItem
  for (let key in currentObj) {
    field.setAttribute(`${key}`, `${currentObj[key]}`);
  }

  //append child elements
  parentDiv.appendChild(label);
  parentDiv.appendChild(field);
  parentDiv.appendChild(message);

  return parentDiv;
}

function createButton(parentDiv, currentObj) {
  // create input for each button
  let item = document.createElement('input');

  //set all listed attributes to the element from current formItem
  for (let key in currentObj) {
    item.setAttribute(`${key}`, `${currentObj[key]}`);
  }

  //append child elements
  parentDiv.appendChild(item);

  return parentDiv;
}
