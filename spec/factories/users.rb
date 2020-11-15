FactoryBot.define do
  factory :user do
    email { Faker::Lorem.word + "." + Faker::Lorem.word + "@example.com" }
    password { Faker::Internet.password }
  end
end