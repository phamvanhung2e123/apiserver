class CreateParticipants < ActiveRecord::Migration[6.0]
  def change
    create_table :participants do |t|
      t.integer "user_id", null: false
      t.integer "event_id", null: false
      t.index  [:event_id,:user_id], unique: true
      t.timestamps
    end

  end
end
