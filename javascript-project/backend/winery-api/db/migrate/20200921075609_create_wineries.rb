class CreateWineries < ActiveRecord::Migration[6.0]
  def change
    create_table :wineries do |t|
      t.string :name
      t.string :winemaker

      t.timestamps
    end
  end
end
