const baseUrl = 'http://localhost:3000'

const revealWineFormButton = () => document.getElementById('form-reveal-button')
const wineList = () => document.getElementById('wine-list')
const form = () => document.getElementById('wine-maker-form')
const wineName = () => document.querySelector('input#wine-name')
const wineVintage = () => document.querySelector('input#wine-vintage')
const varietalDropDown = () => document.querySelector('select')

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
function revealForm() {
  loadVarietals();
  if (revealWineFormButton().innerText === "ADD NEW WINE") {
    form().classList.remove("hidden");
    revealWineFormButton().innerText = "Or Dont";
  }
  else {
    form().classList.add("hidden")
    revealWineFormButton().innerText = "ADD NEW WINE"
  }
}

function loadVarietals() {
  fetch(baseUrl + '/varietals')
    .then(resp => {
      if (resp.status !== 200) {
        throw new Error(resp.statusText);
      }
      return resp.json()
    })
    .then(varietalsData => {
      Varietal.createVarietals(varietalsData)
      Varietal.displayVarietals();
    })
}




function resetInputs() {
  wineName().value = "";
  wineVintage().value = "";
}
