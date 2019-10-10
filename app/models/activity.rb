class Activity < ApplicationRecord

    validates :sport, :title, :athlete_id, presence: true

    belongs_to :athlete,
    primary_key: :id,
    foreign_key: :athlete_id,
    class_name: 'User'

    belongs_to :route,
    primary_key: :id,
    foreign_key: :route_id,
    class_name: 'Route',
    optional: true

end