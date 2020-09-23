class Wine < ApplicationRecord
  has_many :wine_varietals
  has_many :varietals, through: :wine_varietals

  accepts_nested_attributes_for :varietals

end
