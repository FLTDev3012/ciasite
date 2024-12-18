Rails.application.routes.draw do

  scope "(:locale)", locale: /en|fr/ do

    devise_for :users
    root to: "pages#home"

    get 'nosservices', to: 'pages#nosservices'
    get 'projectx', to: 'pages#projectx'
    get 'estimation', to: 'pages#estimation'
    get 'about', to: 'pages#about'
    get 'dashboard', to: 'pages#dashboard'
    get 'legal', to: 'pages#legal'

    post 'send_contact', to: 'contacts#create'
    resources :projects
    resources :contacts, only: [:create]

    # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

    # Defines the root path route ("/")
    # root "articles#index"
  end

end
