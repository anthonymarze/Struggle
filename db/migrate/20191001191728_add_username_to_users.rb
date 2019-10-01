class AddUsernameToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column(:users, :first_name, :string, null: false)
    add_column(:users, :last_name, :string, null: false)
    add_column(:users, :birthday, :date, null: false)
  end
end
