class AddDescriptionAndCategoryToProjects < ActiveRecord::Migration[7.0]
  def change
    add_column :projects, :description, :string
    add_column :projects, :category, :string
  end
end
