const baseUrl = 'http://localhost:3000'

const revealWineFormButton = () => document.getElementById('form-reveal-button')
const wineList = () => document.getElementById('wine-list')
const form = () => document.getElementById('wine-maker-form')
const wineName = () => document.querySelector('input#wine-name')
const wineVintage = () => document.querySelector('input#wine-vintage')

const wines = []

document.addEventListener("DOMContentLoaded", callOnLoad)

function callOnLoad() {
  loadWines();
  revealWineFormButton().addEventListener('click', revealForm);
  form().addEventListener('submit', Wine.createFromForm);
};

function loadWines() {
  fetch(baseUrl + '/wines')
    .then(resp => {
      if (resp.status !== 200) {
        throw new Error(resp.statusText);
      }
      return resp.json()
    })
    .then(winesData => {
      Wine.createWines(winesData)
      Wine.displayWines();
    })
}
/*

function displayWines(wines) {
  wines.forEach(wine => displayWine(wine))
}

function displayWine(wine) {
  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  const h4 = document.createElement('h4');
  const p = document.createElement('p');
  const i = document.createElement('i')
  
  const deleteButton = document.createElement('button');
  deleteButton.innerText = "Delete Wine";
  deleteButton.id = this.id;
  deleteButton.addEventListener('click', deleteWine)

  h4.innerText = wine.name;
  p.innerText = `vintage: ${wine.vintage}`;

  i.setAttribute('class', 'material-icons')
  i.setAttribute('id', 'unliked')
  i.innerText = "mood"
  i.addEventListener('click', event => {
    if (event.target.id === 'unliked')
      i.setAttribute('id', 'liked')  
    else
      i.setAttribute('id', 'unliked') 
  });

  div2.setAttribute('class', 'col s4');
  div2.setAttribute('id', 'card');
  div2.appendChild(h4);
  div2.appendChild(p);
  div2.appendChild(i);
  div2.appendChild(deleteButton);
  

  div1.setAttribute('class', 'row');
  div1.appendChild(div2);

  wineList().appendChild(div1);

}
 
  <div class="row">
    <div class="col s4">
    <h4>Wine Name</h4>
    <p>vintage</p>
    <i class="material-icons">mood</i>
    </div>
  </div>


*/

function revealForm() {
  if (revealWineFormButton().innerText === "ADD NEW WINE") {
    form().classList.remove("hidden");
    revealWineFormButton().innerText = "Or Dont";
  }
  else {
    form().classList.add("hidden")
    revealWineFormButton().innerText = "ADD NEW WINE"
  }
}

/*
function createWine(e) {
  e.preventDefault();

  const wine = {
    name: wineName().value, 
    vintage: wineVintage().value
  }

  wines.push(wine)
  displayWine(wine)

  resetInputs();
  form().classList.add("hidden")
}
*/

/*
function deleteWine(){
  this.parentNode.parentNode.remove()
}

*/

function resetInputs() {
  wineName().value = "";
  wineVintage().value = "";
}
