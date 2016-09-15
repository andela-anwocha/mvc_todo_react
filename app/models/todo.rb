class Todo < Hana::BaseModel
  to_table :todos
  property :title, type: :text, nullable: false
  property :description, type: :text, nullable: false
  property :status, type: :text, nullable: false

  create_table
end
