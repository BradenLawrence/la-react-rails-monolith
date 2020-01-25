# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Cereal.all.destroy_all

cereal_seeds = [
  {
    name: "Cap'n Crunch",
    description: "Oh god, the roof of my mouth is bleeding!"
  },
  {
    name: "Cinnamon Toast Crunch",
    description: "Wendel's secret recipe."
  },
  {
    name: "Coco Puffs",
    description: "Chocolately goodness"
  },
  {
    name: "Cookie Crisp",
    description: "Cookies? For Breakfast?!"
  },
  {
    name: "Lucky Charms",
    description: "Candy? For Breakfast?!"
  }
]

cereal_seeds.each do |seed|
  Cereal.create(seed)
end
