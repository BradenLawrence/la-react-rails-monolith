Rails.application.routes.draw do
  root 'static_pages#index'

  get '/cereals', to: 'static_pages#index'
  get '/cereals/:id', to: 'static_pages#index'

  namespace :api do
    resource :cereals, only: [:show]
  end
end
