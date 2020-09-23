class Varietal < ApplicationRecord
  has_many :wine_varietals
  has_many :wines, through: :wine_varietals
end
