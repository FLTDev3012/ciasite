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
  url: "https://www.youtube.com/watch?v=ErizlXglzfY",
  description:"The Fiasco Restaurant is a showcase website designed to highlight the ambiance, menu, and services of the restaurant. This site offers an immersive navigation experience, allowing visitors to explore the restaurant's world even before setting foot inside.",
  category:"Showcase"
)
file1 = File.open(Rails.root.join("app/assets/images/proj_img/pro_fiasco.png"))
project1.photo.attach(io: file1, filename: "pro_fiasco.png", content_type: "image/png")
project1.save!

project2 = Project.new(
  title: "My Food Restaurant",
  url: "https://www.youtube.com/watch?v=URbIqfRVEtI",
  description:"MyFood Restaurant is a showcase website created to capture the essence of the restaurant’s cuisine and atmosphere. Through this site, visitors can discover the specialties, values, and ambiance of MyFood, inviting them to a virtual first experience of the restaurant.",
  category:"Showcase"
)
file2 = File.open(Rails.root.join("app/assets/images/proj_img/pro_food.png"))
project2.photo.attach(io: file2, filename: "pro_food.png", content_type: "image/png")
project2.save!

project3 = Project.new(
  title: "Merlimont City Web Portail",
  url: "https://www.youtube.com/watch?v=5aCQLEGUS1c",
  description:"Merlimont City Web Portal is a content management system designed for the town of Merlimont in Pas-de-Calais. This portal enables administrators to easily publish and manage local information, events, and public services, providing residents with quick and convenient access to municipal news and resources.",
  category:"Content Management System"
)
file3 = File.open(Rails.root.join("app/assets/images/proj_img/pro_merli.png"))
project3.photo.attach(io: file3, filename: "pro_merli.png", content_type: "image/png")
project3.save!

project4 = Project.new(
  title: "Unlock Horizon Web Portail",
  url: "https://www.youtube.com/watch?v=5aCQLEGUS1c",
  description:"Unlock Horizon Web Portal is a content management system crafted to simplify the organization and display of digital content. This platform enables administrators to manage, publish, and update content effortlessly, providing a streamlined and engaging experience for users accessing the site’s resources and information.",
  category:"Content Management System"
)
file4 = File.open(Rails.root.join("app/assets/images/proj_img/prounlock.png"))
project4.photo.attach(io: file4, filename: "pro_merli.png", content_type: "image/png")
project4.save!

puts "4 projects created successfully!"
