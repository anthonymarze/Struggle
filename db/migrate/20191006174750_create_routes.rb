class CreateRoutes < ActiveRecord::Migration[5.1]
  def change
    create_table :routes do |t|
      t.string :name, null: false
      t.string :coordinate_string, null: false
      t.integer :author_id, null: false
      t.timestamps
    end

    add_index :routes, [:name, :author_id], unique: true
    add_index :routes, :author_id
  end
end