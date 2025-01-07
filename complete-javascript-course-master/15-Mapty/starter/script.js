'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

let map, mapEvent;

// Workout (main) Class
class Workout {
  date = new Date();
  //defining id
  id = (Date.now() + '').slice(-10);
  constructor(coords, distance, duration) {
    Object.assign(this, { coords, distance, duration });
  }
}

// Running (child) class
class Running extends Workout {
  constructor(coords, distance, duration, cadence) { // coords: [lat, lng] , distance: km , duration: in min 43.646976,-79.3706496
    super(coords, distance, duration);
    Object.assign(this, { cadence });
    this.calcPace();
  }

  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace
  }
}

// Cycling (child) class
class Cycling extends Workout {
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    Object.assign(this, { elevationGain });
  }

  calcSpeed() {
    // km/h --> km / min
    this.speed = this.distance / (this.duration / 60) 
    return this.speed
  }
}


//////////////////////////////////////////////////////////////////////////////////////////////////////
// Application Architecture

//////

class App {
  #map;
  #mapEvent;

  constructor() {
    this._getPosition();

    inputType.addEventListener('change', this._toggleElevationField);

    // Handling clicks on map
    form.addEventListener('submit', this._newWorkout.bind(this));
  }

  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), () => {
        alert('Could not get your position');
      });
    }
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude];

    this.#map = L.map('map').setView(coords, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on('click', this._showForm.bind(this));
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;

    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    e.preventDefault();

    // Clear input fields
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';

    // Display marker
    console.log('SUBMIT');

    const { lat, lng } = this.#mapEvent.latlng;

    L.marker([lat, lng])
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: 'running-popup',
        })
      )
      .setPopupContent('Workout')
      .openPopup();
  }
}

const app = new App();
