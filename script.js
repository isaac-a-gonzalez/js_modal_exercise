'use strict';

//NOTE: Adding and removing classes are the main ways we change styles in websites.

// Defining and selecting classes.
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// Function that opens modal by removing 'hidden' secondary class back into HTML.
const openModal = function () {
  //NOTE: notice how 'hidden' has no '.' before it. The '.' is only used for the selectors like querySelector.
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Function that closes modal by adding 'hidden' secondary class back into HTML.
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Looping through btnsOpenModal class in order to remove 'hidden' from both modal and overlay class.
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

// Selects btnCloseModal class in order to place 'hidden' back into HTML thus causing modal to disappear again. We're just defining the function here, not calling it. The JavaScript engine will call this function once a click event happens on this element (btnCloseModal).
btnCloseModal.addEventListener('click', closeModal);
// Same as function above. 'overlay' class instead of btnCloseModal class.
overlay.addEventListener('click', closeModal);

/*

-----DEPRICATED CODE---
The code below was used to illustrate the easy way to accomplish the task but it didn't follow DRY programming because the same function was used twice.

overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

*/

//NOTE: Keyboard events occur globally. Here we use an event listener on the whole document to listen for the 'escape' key to return all elements to their original state.
// The 'event' here is actually an object that has information. You can check it out by logging it to the console.
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
