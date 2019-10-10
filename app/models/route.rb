class Route < ApplicationRecord
    validates :name, :coordinate_string, :author_id, :distance, :elevation, :transportation_style, presence: true
    validates :name, :uniqueness => { :scope => :author_id }
    validates :transportation_style, inclusion: {in: ['CYCLING', 'WALKING']}

    belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'User'

    has_many :activities,
    primary_key: :id,
    foreign_key: :route_id,
    class_name: 'Activity'

end