class WineVarietal < ApplicationRecord
  belongs_to :wine
  belongs_to :varietal
end
