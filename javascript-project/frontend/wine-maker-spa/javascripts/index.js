const baseUrl = 'http://localhost:3000'

const wineList = () => document.getElementById('wine-list')
const form = () => document.getElementById('wine-maker-form')
const wineName = () => document.querySelector('input#wine-name')
const wineVintage = () => document.querySelector('input#wine-vintage')

const wines = []

document.addEventListener("DOMContentLoaded", callOnLoad)

function callOnLoad() {
  loadWines();
  form().addEventListener('submit', createWine)
};

function loadWines() {
  fetch(baseUrl + '/wines')
    .then(resp => {
      if (resp.status !== 200) {
        throw new Error(resp.statusText);
      }
      return resp.json()
    })
    .then(data => displayWines(data))
}

function displayWines(wines) {
  wines.forEach(wine => displayWine(wine))
}

function displayWine(wine) {
  const div = document.createElement('div');
  const h4 = document.createElement('h4');
  const p = document.createElement('p');
  const deleteButton = document.createElement('button');
  const editButton = document.createElement('button');

  h4.innerText = wine.name;
  p.innerText = `vintage: ${wine.vintage}`;

  div.appendChild(h4);
  div.appendChild(p);

  wineList().appendChild(div);

/* 
  <div class="row">
    <div class="col s4">
    <h4>Wine Name</h4>
    <p>vintage</p>
    </div>
  </div>
*/
}

function createWine(e) {
  e.preventDefault();

  const wine = {
    name: wineName().value, 
    vintage: wineVintage().value
  }

  wines.push(wine)
  displayWine(wine)

  resetInputs();
}

function resetInputs() {
  wineName().value = "";
  wineVintage().value = "";
}