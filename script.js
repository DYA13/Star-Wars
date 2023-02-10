// Planets
const ctnPlanets = document.querySelector("#ctn-main");
const planetsPrevious = document.querySelector("#planets-previous");
const planetsNext = document.querySelector("#planets-next");

let URL_Planets = "https://swapi.dev/api/planets/?page=1";
let nextPlanets;
let previousPlanets;

planetsPrevious.addEventListener("click", pagePreviousPlanets);
planetsNext.addEventListener("click", pageNextPlanets);

// Starships
const starshipsPrevious = document.querySelector("#starships-previous");
const starshipsNext = document.querySelector("#starships-next");

let URL_Starships = "https://swapi.dev/api/starships/?page=1";
let nextStarships;
let previousStarships;

starshipsPrevious.addEventListener("click", pagePreviousStarships);
starshipsNext.addEventListener("click", pageNextStarships);

// People
const peoplePrevious = document.querySelector("#people-previous");
const peopleNext = document.querySelector("#people-next");

let URL_People = "https://swapi.dev/api/people/?page=1";
let nextPeople;
let previousPeople;

peoplePrevious.addEventListener("click", pagePreviousPeople);
peopleNext.addEventListener("click", pageNextPeople);


// Functions Planets
async function fetchPlanets() {
  document.querySelector('.overlay').classList.add('active');
  let results = await fetch(URL_Planets);
  const data = await results.json();
  nextPlanets = data.next;
  previousPlanets = data.previous;
  let planets = data.results;
  let outPut = ' ';
  document.querySelector('.overlay').classList.remove('active');
  planets.forEach(item => {
    outPut += `<div class="card card-planet">
                  <h2>${item.name}</h2>
                  <h5>Climate: ${item.climate}</h5>
                  <h5>Terrain: ${item.terrain}</h5>
                  <h5>Population: ${item.population}</h5>
               </div>`
  })
  ctnPlanets.innerHTML = outPut;
}

function pageNextPlanets() {
  if(nextPlanets) {
    URL_Planets = new URL(nextPlanets);
  }
  fetchPlanets()
    .then(response => { 
    console.log(`Success: Planets`);
  })
    .catch(error => { 
    console.log(`error!`)
    console.error(error) 
  });
}

function pagePreviousPlanets() {
  if(previousPlanets) {
    URL_Planets = new URL(previousPlanets);
  }
  fetchPlanets()
    .then(response => { 
    console.log(`Success: Planets`);
  })
    .catch(error => { 
    console.log(`error!`)
    console.error(error) 
  });
}

// Functions Starships
async function fetchStarships() {
document.querySelector('.overlay').classList.add('active');
  let results = await fetch(URL_Starships);
  const data = await results.json();
  nextStarships = data.next;
  previousStarships = data.previous;
  let starships = data.results;
  let outPut = ' ';
document.querySelector('.overlay').classList.remove('active');
  starships.forEach(item => {
    outPut += `<div class="card card-starships">
                  <h2>${item.name}</h2>
                  <h5>Model: ${item.model}</h5>
                  <h5>Manufacturer: ${item.manufacturer}</h5>
                  <h5>Cost in credits: ${item.cost_in_credits}</h5>
                  <h5>Length: ${item.length}</h5>
                  <h5>Max atmosphering speed: ${item.max_atmosphering_speed}</h5>
                  <h5>Crew: ${item.crew}</h5>
                  <h5>Passengers: ${item.passengers}</h5>
                  <h5>Cargo capacity: ${item.cargo_capacity}</h5>
               </div>`
  })
  ctnPlanets.innerHTML = outPut;
}

function pageNextStarships() {
  if(nextStarships) {
    URL_Starships = new URL(nextStarships);
  }
  fetchStarships()
    .then(response => { 
    console.log(`Success: Starships`);
  })
    .catch(error => { 
    console.log(`error!`)
    console.error(error) 
  });
}

function pagePreviousStarships() {
  if(previousStarships) {
    URL_Starships = new URL(previousStarships);
  }
  fetchStarships()
    .then(response => { 
    console.log(`Success: Starships`);
  })
    .catch(error => { 
    console.log(`error!`)
    console.error(error) 
  });
}

// Functions People
async function fetchPeople() {
document.querySelector('.overlay').classList.add('active');
  let results = await fetch(URL_People);
  const data = await results.json();
  nextPeople = data.next;
  previousPeople = data.previous;
  let people = data.results;
  let outPut = ' ';
document.querySelector('.overlay').classList.remove('active');  
  people.forEach(item => {
    outPut += `<div class="card card-people">
                  <h2>${item.name}</h2>
                  <h5>Gender: ${item.gender}</h5>
                  <h5>Birth Year: ${item.birth_year}</h5>
                  <h5>Height: ${item.height}</h5>
                  <h5>Hair Color: ${item.hair_color}</h5>
                  <h5>Skin Color: ${item.skin_color}</h5>
                  <h5>Eye Color: ${item.eye_color}</h5>
               </div>`
  })
  ctnPlanets.innerHTML = outPut;
}

function pageNextPeople() {
  if(nextPeople) {
    URL_People = new URL(nextPeople);
  }
  fetchPeople()
    .then(response => { 
    console.log(`Success: People`);
  })
    .catch(error => { 
    console.log(`error!`)
    console.error(error) 
  });
}

function pagePreviousPeople() {
  if(previousPeople) {
    URL_People = new URL(previousPeople);
  }
  fetchPeople()
    .then(response => { 
    console.log(`Success: People`);
  })
    .catch(error => { 
    console.log(`error!`)
    console.error(error) 
  });
}