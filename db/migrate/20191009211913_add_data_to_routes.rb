class AddDataToRoutes < ActiveRecord::Migration[5.2]
  def change
    add_column :routes, :distance, :float, null: false
    add_column :routes, :elevation, :integer, null: false
    add_column :routes, :type, :string, null: false
  end
end
