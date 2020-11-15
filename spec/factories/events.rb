FactoryBot.define do
  factory :event do
    name { Faker::Lorem.word }
    location { Faker::Lorem.word }
  end
end