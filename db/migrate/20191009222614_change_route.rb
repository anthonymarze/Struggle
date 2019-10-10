class ChangeRoute < ActiveRecord::Migration[5.2]
  def change
    remove_column :routes, :type, :string, null: false
    add_column :routes, :route_type, :string, null: false
  end
end
