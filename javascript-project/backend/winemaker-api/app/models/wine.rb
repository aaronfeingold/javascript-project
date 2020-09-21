class Wine < ApplicationRecord
  has_many :varietals

  accepts_nested_attributes_for :varietals

end
