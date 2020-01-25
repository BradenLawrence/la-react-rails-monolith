Rails.application.routes.draw do
  root 'static_pages#index'

  get '/cereals', to: 'static_pages#index'
  get '/cereals/:id', to: 'static_pages#index'
end
