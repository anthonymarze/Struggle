class CreateActivity < ActiveRecord::Migration[5.2]
  def change
    create_table :activities do |t|
      t.float :distance
      t.time :duration
      t.integer :elevation
      t.string :sport, null: false
      t.datetime :date_and_time
      t.string :title, null: false
      t.text :description
      t.string :exertion
      t.integer :route_id
      t.integer :athlete_id, null: false
      t.timestamps
    end

    add_index :activities, :athlete_id
    add_index :activities, :route_id
  end
end
