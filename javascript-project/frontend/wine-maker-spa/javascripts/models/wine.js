

class Wine {

  static all = []

  constructor(id, name, vintage, varietals) {
    this.id = id;
    this.name = name;
    this.vintage = vintage;
    this.varietals = varietals.map(varietal =>  Varietal.create(varietal.id, varietal.name, varietal.wine_id))
  }

  display() {
    
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    let h4 = document.createElement('h4');
    let ul = document.createElement('ul')
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    const i = document.createElement('i')

    const deleteButton = document.createElement('button');
    deleteButton.innerText = "Delete Wine";
    deleteButton.id = this.id;
    deleteButton.setAttribute('class', 'btn')
    deleteButton.addEventListener('click', Wine.deleteWine)

    h4.innerText = this.name;
    p1.innerText = `vintage: ${this.vintage}`;
   
    this.varietals.forEach(varietal => p2.innerHTML = `varietal: ${varietal.name}`);
  
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
    div2.appendChild(p1);
    div2.appendChild(p2);
    div2.appendChild(i);
    div2.appendChild(deleteButton);
    
  
    div1.setAttribute('class', 'row');
    div1.appendChild(div2);
  
    wineList().appendChild(div1);
  
  }

  static createFromForm(e) {
    e.preventDefault();
    
    
    const strongWineParams = {
      name: wineName().value, 
      vintage: wineVintage().value,
      varietals: [...varietalDropDown().options].filter(option => option.selected).map(option => option.innerHTML)
    }
    
  
    fetch(baseUrl + '/wines.json', {
      method: "post",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(strongWineParams)
    })
    .then(resp => resp.json())
    .then(data => {
      let wine = Wine.create(data.id, data.name, data.vintage, data.varietals);
      wine.display();
    })
    resetInputs();
    form().classList.add("hidden")
    revealWineFormButton().innerText = "ADD NEW WINE"
  }

  static createWines(winesData){
    winesData.forEach(data => Wine.create(data.id, data.name, data.vintage, data.varietals));
  }

  static create(id, name, vintage, varietals) {
    let wine = new Wine(id, name, vintage, varietals);

    Wine.all.push(wine);

    return wine;
  }


  static displayWines(){
    wineList().innerHTML = '';
    Wine.all.forEach(wine => wine.display())
  }

  static findById(id) {
    return this.all.find(wine => wine.id == id)
}

  static deleteWine(e) {
    this.id 
    this.parentNode.parentNode 

    fetch(baseUrl + '/wines/' + this.id, {
      method: "delete"
    })
      .then(resp =>resp.json())
      .then(obj => {
        console.log(obj);
        alert('wine was deleted');
        return obj;
      })
      .catch(error => {
        alert("delete request failed. check console for error message.");
        console.log(error.message);
    })
    }
  }

  // FOR WINE DELETE
  // this.parentNode.parentNode.remove();
  // Wine.all = Wine.all.filter(wine => wine.id !== data.id);
  // Wine.displayWines();