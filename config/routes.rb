Rails.application.routes.draw do
  root "static_pages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: "json" } do
    resources :users, only: [:create]
    resources :routes, only: [:create, :index, :show, :destroy]
    resources :activities, only: [:create, :index, :show]
    resource :session, only: [:create, :destroy]
    get '/users/exists', to: 'users#verify_email'
  end
end
