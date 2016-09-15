class TodoController < ApplicationController
  before_action :set_todo, only: [:show, :update, :edit, :destroy]

  def index
    @todos = Todo.all
    render json: @todos, status: 200
  end

  def home
  end

  def new
  end

  def show
    render json: @todo, status: 200
  end

  def edit
    redirect_to "/todo/1"
  end

  def create
    todo_params = params.permit(:title, :description, :status)
    @todo = Todo.create(todo_params)
    render json: @todo, status: 201
  end

  def update
    todo_params = params.permit(:title, :description, :status)
    if @todo.update(todo_params)
      render json: Todo.all, status: 200
    else
      render json: { notice: "Failed" }, status: 500
    end
  end

  def destroy
    @todo.destroy
    render json: Todo.all, status: 200
  end

  private

  def set_todo
    @todo = Todo.find(params[:id])
  end
end
