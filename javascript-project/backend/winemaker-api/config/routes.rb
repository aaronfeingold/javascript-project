Rails.application.routes.draw do
  resources :wine_varietals
  resources :varietals
  resources :wines do
    resources :varietals
  end
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
