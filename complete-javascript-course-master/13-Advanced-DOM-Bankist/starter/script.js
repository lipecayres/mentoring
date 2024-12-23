'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

// Tabbed Components
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// Nav
const nav = document.querySelector('.nav');

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

document.querySelector('.nav__links').addEventListener('click', function (e) {
  const id = e.target.getAttribute('href');
  document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
});

// Tabbed Components

tabsContainer.addEventListener('click', function (e) {
  // Get button and making sure is always catching the button.
  const clicked = e.target.closest('button');

  // Guard clause
  if (!clicked) return;

  // Removing classes from all elements
  tabs.forEach(t => t.classList.remove('operations__tab--active'));

  // Adding class to target element
  clicked.classList.add('operations__tab--active');

  // Activate Content Area
  // Remove classes from all elements
  const currentContent = document.querySelector(
    `.operations__content--${clicked.dataset.tab}`
  );
  // Adding class to target content element
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  currentContent.classList.add('operations__content--active');
});

// Menu fade animation
const handleHover = function (e) {
  console.log(this);
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// Passing 'argument' into handle functions
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

// Sticky navigation
const initialCoords = section1.getBoundingClientRect();
window.addEventListener('scroll', function (e) {
  if (window.scrollY > initialCoords.y) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});

/*
// Intersection Observer API
const obsCallBack = function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
  });
};

const obsOptions = {
  root: null,
  threshold: 0.1,
};

const observer = new IntersectionObserver(obsCallBack, obsOptions);

observer.observe(section1);
*/

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// -- Revealing section on scroll down

// Selecting all sections
const allSections = document.querySelectorAll('.section');
// Observer action function
const revealSection = function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');

    observer.unobserve(entry.target);
  });
};

// New Observer
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

// Creating an observer to every single section
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// -- Lazy loading images

// targets selector
const imgTargets = document.querySelectorAll('img[data-src]');

// observer function
const loadImages = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;
  // Replace source attribute
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', () => {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

// New Obsever
const imgObserver = new IntersectionObserver(loadImages, {
  root: null,
  threshold: 0.15,
  rootMargin: '200px',
});

// creating observer for all elements
imgTargets.forEach(img => imgObserver.observe(img));

// -- Slider Implementation

const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotsContainer = document.querySelector('.dots');

  const maxSlides = slides.length;
  let currentSlide = 0;

  // Functions
  const createDots = function () {
    slides.forEach((_, i) => {
      dotsContainer.insertAdjacentHTML(
        'beforeend',
        `<button class = 'dots__dot' data-slide="${i}"></button>`
      );
    });
  };

  const activateDots = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  function goToSlide(slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translatex(${100 * (i - slide)}%)`)
    );
  }

  // Next slide
  const nextSlide = function () {
    if (currentSlide === maxSlides - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    goToSlide(currentSlide);
    activateDots(currentSlide);
  };

  // Previous slide
  const prevSlide = function () {
    if (currentSlide === 0) {
      currentSlide = maxSlides - 1;
    } else {
      currentSlide--;
    }
    goToSlide(currentSlide);
    activateDots(currentSlide);
  };

  const init = function () {
    createDots();
    activateDots(0);
    goToSlide(0);
  };
  init();

  // Event Handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  // keyboard events
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  // dots slider
  dotsContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      currentSlide = Number(e.target.dataset.slide);
      goToSlide(currentSlide);
      activateDots(currentSlide);
    }
  });
};
slider();
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


// DOM Traversing

const h1 = document.querySelector('h1')

//Going downwards
console.log(h1.querySelectorAll('.highlight'))
console.log(h1.childNodes)
console.log(h1.children)
h1.firstElementChild.style.color = 'white'
h1.lastElementChild.style.color = 'orangered'

//Going upwards: parents

console.log(h1.parentNode)
console.log(h1.parentElement)

h1.closest('.header').style.background = 'var(--gradient-secondary)';

h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideways: siblings
console.log(h1.previousElementSibling)
console.log(h1.previousElementSibling)


console.log(h1.previousSibling)
console.log(h1.nextSibling)

console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach(function(el){
  if (el!== h1) el.style.transform = 'scale(0.5)'
})
*/

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

// Tabbed Components
