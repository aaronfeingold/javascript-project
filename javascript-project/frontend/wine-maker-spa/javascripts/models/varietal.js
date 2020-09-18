class Varietal {

    static all = []

    constructor(id, name) {
      this.id = id;
      this.name = name;
    }

addVarietalsToVarietalSelector() {
  const varietalOption = document.createElement('option')
  varietalOption.setAttribute('value', `${this.id}`)
  varietalOption.innerText = this.name
  wineVarietalSelector().appendChild(varietalOption)
}

static create(id, name) {
  let varietal = new Varietal(id, name);

  Varietal.all.push(varietal);

  return varietal;
}

static createVarietals(varietalsData){
  varietalsData.forEach(data => Varietal.create(data.id, data.name));
}

static displayVarietals(){
  wineList().innerHTML = '';
  Varietal.all.forEach(varietal => varietal.addVarietalsToVarietalSelector())
}

}