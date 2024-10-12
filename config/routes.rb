Rails.application.routes.draw do
  devise_for :users
  root to: "pages#home"
  get 'nosservices', to: 'pages#nosservices'
  get 'projects', to: 'pages#projects'
  get 'estimation', to: 'pages#estimation'
  get 'about', to: 'pages#about'
  get 'test', to: 'pages#test'

  post 'send_contact', to: 'contacts#create'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
