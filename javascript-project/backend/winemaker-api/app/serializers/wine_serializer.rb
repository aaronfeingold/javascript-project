class WineSerializer < ActiveModel::Serializer
  attributes :id, :name, :vintage, :varietal_ids
  has_many :varietals, through: :wine_varietals

  # accepts_nested_attributes_for :varietals
end
