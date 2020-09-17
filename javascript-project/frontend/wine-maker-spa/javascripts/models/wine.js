class Wine {

  static all = []

  constructor(id, name, vintage) {
    this.id = id;
    this.name = name;
    this.vintage = vintage;
  }

  display() {
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const h4 = document.createElement('h4');
    const p = document.createElement('p');
    const i = document.createElement('i')
    
    const deleteButton = document.createElement('button');
    deleteButton.innerText = "Delete Wine";
    deleteButton.id = this.id;
    deleteButton.addEventListener('click', Wine.deleteWine)

    h4.innerText = this.name;
    p.innerText = `vintage: ${this.vintage}`;
  
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

  static createFromForm(e) {
    e.preventDefault();
  
    const strongParams = {
      name: wineName().value, 
      vintage: wineVintage().value
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
          let wine = Wine.create(data.id, data.name, data.vintage);
          wine.display();
        })
  
    resetInputs();
    form().classList.add("hidden")
  }

  static create(id, name, vintage) {
    let wine = new Wine(id, name, vintage);

    Wine.all.push(wine);

    return wine;
  }

  static createWines(winesData){
    winesData.forEach(data => Wine.create(data.id, data.name, data.vintage));
  }

  static displayWines(){
    wineList().innerHTML = '';
    Wine.all.forEach(wine => wine.display())
  }

  static deleteWine() {

  }
}