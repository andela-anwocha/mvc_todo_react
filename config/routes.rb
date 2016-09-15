TodoApplication.routes.draw do
  root "todo#home"
  get "/todo", to: "todo#index"
  get "/todo/new", to: "todo#new"
  get "/todo/:id", to: "todo#show"
  get "/todo/:id/edit", to: "todo#edit"
  post "/todo", to: "todo#create"
  put "/todo/:id", to: "todo#update"
  patch "/todo/:id", to: "todo#update"
  delete "/todo/:id", to: "todo#destroy"
end
