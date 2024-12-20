'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Page navigation
/*
document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();

    const id = this.getAttribute('href');

    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});
*/

// Event Delegation
// 1. Add event listeener to commom parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  const id = e.target.getAttribute('href');
  document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
});

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
/* 
// Selecting
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
// .insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = `We use cookies for improved functionality and analytics`;
message.innerHTML = `We use cookies for improved functionality and analytics <button class = 'btn btn--close-cookie'>Got it</button>`;

// first element
// header.prepend(message)

// last element
header.prepend(message);

// add copy
// header.append(message.cloneNode(true))

// header.before(message)
// header.after(message)

// Delete element

document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  message.remove();
  // message.parentElement.removeChild(message);
});

// Styles

message.style.backgroundColor = '#37383d';
message.style.width = '105%';

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
Number.parseFloat(getComputedStyle(message).height, 10) + 20 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');

console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

// Non- standard
console.log(logo.designer); //defined by user, not standard
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');

console.log(link.href)
console.log(link.getAttribute('href'))

// Data attributes

console.log(logo.dataset.versionNumber)

// Classes

logo.classList().add()
logo.classList.remove('c', 'j')
logo.classList().toggle('c')
logo.classList().contains('c')  // not includes

// Don't use
logo.className = 'jonas'

*/

// event to scroll
/*
btnScrollTo.addEventListener('click', e => {
  // Get coordinates
  const s1coords = section1.getBoundingClientRect();
  /*
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y) ', window.pageXOffset, window.pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
*/

/*
  // old way
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });
  
  section1.scrollIntoView({ behavior: 'smooth' });

  });

*/

/*
// event handlers 
const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEv function');
};
h1.addEventListener('mouseenter', alertH1);
setTimeout(() => {
  h1.removeEventListener('mouseenter', alertH1);
}, 3000);


// event propagation in practice

const randomlnt = (min, max) =>
  Math.floor(Math.random() * (max - min +1) + min);

const randomColor = ( ) =>
  `rgb(${randomlnt(0,255)},${randomlnt(0,255)},${randomlnt(0,255)})`

console.log(randomColor())

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target)
  
  e.stopPropagation();
})

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Container', e.target)
})

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Nav', e.target)
})

*/
