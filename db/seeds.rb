# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "Deleting existing projects..."
Project.destroy_all

puts "Creating new projects..."

project1 = Project.new(
  title: "The Fiasco Restaurant",
  url: "https://www.youtube.com/watch?v=ErizlXglzfY"
)
file1 = File.open(Rails.root.join("app/assets/images/proj_img/pro_fiasco.png"))
project1.photo.attach(io: file1, filename: "pro_fiasco.png", content_type: "image/png")
project1.save!

project2 = Project.new(
  title: "My Food Restaurant",
  url: "https://www.youtube.com/watch?v=URbIqfRVEtI"
)
file2 = File.open(Rails.root.join("app/assets/images/proj_img/pro_food.png"))
project2.photo.attach(io: file2, filename: "pro_food.png", content_type: "image/png")
project2.save!

project3 = Project.new(
  title: "Merlimont City Web Portail",
  url: "https://www.youtube.com/watch?v=5aCQLEGUS1c"
)
file3 = File.open(Rails.root.join("app/assets/images/proj_img/pro_merli.png"))
project3.photo.attach(io: file3, filename: "pro_merli.png", content_type: "image/png")
project3.save!

project4 = Project.new(
  title: "Merlimont City Web Portail",
  url: "https://www.youtube.com/watch?v=5aCQLEGUS1c"
)
file4 = File.open(Rails.root.join("app/assets/images/proj_img/pro_merli.png"))
project4.photo.attach(io: file4, filename: "pro_merli.png", content_type: "image/png")
project4.save!

puts "4 projects created successfully!"
