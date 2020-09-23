class WineVarietalSerializer < ActiveModel::Serializer
  attributes :id, :wine_id, :varietal_id
  belongs_to :wine
  belongs_to :varietal
end
