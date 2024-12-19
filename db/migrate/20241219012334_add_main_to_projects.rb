class AddMainToProjects < ActiveRecord::Migration[7.0]
  def change
    add_column :projects, :main, :boolean, default: false
  end
end
