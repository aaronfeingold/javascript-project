class CreateWineVarietals < ActiveRecord::Migration[6.0]
  def change
    create_table :wine_varietals do |t|
      t.integer :wine_id
      t.integer :varietal_id

      t.timestamps
    end
  end
end
