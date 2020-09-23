class RemoveColumnWineIdFromVarietals < ActiveRecord::Migration[6.0]
  def change
    remove_column :varietals, :wine_id
  end
end
