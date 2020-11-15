Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      post 'authenticate', to: 'authentication#authenticate'
      get 'events', to:  'events#index'
      get 'events/:event_id/participants', to:  'participants#index'
      post 'events/:event_id/participants', to:  'participants#create'
    end
  end
end
