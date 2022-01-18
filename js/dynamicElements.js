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

function createCheckboxInput(parentDiv, currentObj) {
  let field = document.createElement(`input`);
  field.setAttribute('class', 'inline-input');

  let label = document.createElement('span');
  label.setAttribute('for', currentObj.label);
  label.setAttribute('class', 'inline-input');
  label.innerHTML = currentObj.label;

  for (let key in currentObj) {
    field.setAttribute(`${key}`, `${currentObj[key]}`);
  }
  parentDiv.appendChild(field);

  parentDiv.appendChild(label);
  return parentDiv;
}

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
