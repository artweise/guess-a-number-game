const modal = document.querySelector('#modal');
const PlayBtn = document.querySelector('#play-btn');
const closeModalBtn = document.querySelector('#close-modal-btn');
const overlay = document.querySelector('#overlay');
const minInput = document.querySelector('#min');
const maxInput = document.querySelector('#max');

PlayBtn.addEventListener('click', (e) => {
  modal.classList.add('open');
  overlay.classList.add('open');
});

closeModalBtn.addEventListener('click', (e) => {
  // Function that gives a random integer between min and max
  function getRandomInt(min, max) {
    // return (randomInt = Math.floor(Math.random() * 6));
    let randomInt = Math.floor(Math.random() * (max - min) + min);
    return randomInt;
  }
  // Pass the values of minInput and maxInput as arguments
  const result = getRandomInt(parseInt(minInput.value), parseInt(maxInput.value));
  console.log(result);

  modal.classList.remove('open');
  overlay.classList.remove('open');
  // Removes #play-btn from the DOM and the page
  const removeButton = (el) => el.parentNode.removeChild(el);
  removeButton(document.querySelector('#play-btn'));
  // Add new elements to the DOM (on the page)
  const divGame = document.createElement('div');
  document.body.appendChild(divGame);
  divGame.classList.add('game');
  const labelInput = document.createElement('label');
  divGame.appendChild(labelInput);
  // let textLabel = document.createTextNode('Try your luck!');
  // labelInput.appendChild(textLabel);
  labelInput.innerText = 'Try your luck!';
  const input = document.createElement('input');
  input.setAttribute('id', 'try-input');
  divGame.appendChild(input);
  // inputRange.setAttribute('type', 'range');
  const goButton = document.createElement('button');
  divGame.appendChild(goButton);
  // tryButton.setAttribute('type', 'submit');
  goButton.setAttribute('id', 'go-button');
  const textGoButton = document.createTextNode('Go!');
  goButton.appendChild(textGoButton);

  goButton.addEventListener('click', (e) => {
    // Convert input value to integer
    let inputValue = parseInt(input.value, 10);

    // Perform calculations with numeric values
    let closeResOne = inputValue + 1;
    let closeResTwo = inputValue - 1;
    let farResOne = inputValue + 2;
    let farResTwo = inputValue - 2;

    if (result == inputValue) {
      labelInput.innerText = 'Right on the spot! You are a lucky one.';
    } else if (closeResOne == result || closeResTwo == result) {
      labelInput.innerText = 'You are getting close';
    } else if (farResOne == result || farResTwo == result) {
      labelInput.innerText = 'You are far away';
    } else {
      labelInput.innerText = 'Try again';
    }
    input.value = '';
  });
});

// Add a click event listener to the overlay that removes the class "open" from the modal and the overlay
overlay.addEventListener('click', (e) => {
  modal.classList.remove('open');
  overlay.classList.remove('open');
});
