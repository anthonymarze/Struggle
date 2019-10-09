class Route < ApplicationRecord
    validates :name, :coordinate_string, :author_id, presence: true
    validates :name, :uniqueness => { :scope => :author_id }

    belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'User'
end