class CreateVineyards < ActiveRecord::Migration[6.0]
  def change
    create_table :vineyards do |t|
      t.string :name
      t.integer :acreage
      t.references :winery, null: false, foreign_key: true

      t.timestamps
    end
  end
end
