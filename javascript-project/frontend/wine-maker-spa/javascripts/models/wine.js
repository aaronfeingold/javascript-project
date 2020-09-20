class Wine {

  static all = []

  constructor(id, name, vintage, varietal_ids) {
    this.id = id;
    this.name = name;
    this.vintage = vintage;
    this.varietal_ids = varietal_ids;
  }

  display() {
    
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const h4 = document.createElement('h4');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const i = document.createElement('i')

    const deleteButton = document.createElement('button');
    deleteButton.innerText = "Delete Wine";
    deleteButton.id = this.id;
    deleteButton.setAttribute('class', 'btn')
    deleteButton.addEventListener('click', Wine.deleteWine)

    h4.innerText = this.name;
    p1.innerText = `vintage: ${this.vintage}`;
    p2.innerText = `varietal: ${this.varietal_ids}`
  
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
   
    
    const strongParams = {
      name: wineName().value, 
      vintage: wineVintage().value,
      varietals: varietalDropDown().value
    }

    fetch(baseUrl + '/wines.json', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(strongParams)
    })
      .then(resp => resp.json())
        .then(data => {
          let wine = Wine.create(data.id, data.name, data.vintage, data.varietal_ids);
          wine.display();
        })
  
    resetInputs();
    form().classList.add("hidden")
    revealWineFormButton().innerText = "ADD NEW WINE"
  }

  static createWines(winesData){
    winesData.forEach(data => Wine.create(data.id, data.name, data.vintage, data.varietal_ids));
  }

  static create(id, name, vintage, varietal_ids) {
    let wine = new Wine(id, name, vintage, varietal_ids);

    Wine.all.push(wine);

    return wine;
  }


  static displayWines(){
    wineList().innerHTML = '';
    Wine.all.forEach(wine => wine.display())
  }

  static deleteWine(e) {
    this.id 
    this.parentNode.parentNode 

    fetch(baseUrl + '/wines/' + this.id, {
      method: "delete"
    })
      .then(resp => { 
        return resp.json(); 
      })
      .then(data => {
        // this.parentNode.parentNode.remove();
        Wine.all = Wine.all.filter(wine => wine.id !== data.id);
        Wine.displayWines();
      })
  }
}