# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# wine1 = Wine.create(name: "Caymus", vintage: 2010)
# wine2 = Wine.create(name: "Silver Oak", vintage: 2011)
# wine3 = Wine.create(name: "Harlan Estate", vintage: 2012)
# wine4 = Wine.create(name: "Bond", vintage: 2010)
# wine5 = Wine.create(name: "Screaming Eagle", vintage: 2011)
wine6 = Wine.create(name: "Continuum", vintage: 2012)

# cab = Varietal.create(name: "Cabernet Sauvignon")
# pinot = Varietal.create(name: "Pinot Noir")
# chard = Varietal.create(name: "Chardonnay")
sauv = Varietal.create(name: "Sauvignon Blanc")

winevarietal1 = WineVarietal.create(wine: wine6, varietal: sauv)