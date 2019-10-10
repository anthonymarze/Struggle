class ChangeRouteAgain < ActiveRecord::Migration[5.2]
  def change
    remove_column :routes, :route_type, :string, null: false
    add_column :routes, :transportation_style, :string, null: false
  end
end
