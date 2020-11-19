# README

# Server
#### How to start
- Install ruby, rails
- Install dependency
```
# Make sure Ruby is installed.
# If not, install Ruby by referring https://www.ruby-lang.org/en/documentation/installation/
ruby -v

# Make sure bundler is installed.
# If not, install bundler by referring https://bundler.io/
bundler -v

# Make sure sqlite3 is installed https://www.sqlite.org/index.html
sqlite3 --version

# Make sure rails is installed https://rubyonrails.org/
rails --version

# Initial setup
bundle install

# Initial database
rails db:migrate
rails db:seed

# Start server
rails server

# Confirm user
curl -X POST http://localhost:3000/api/v1/authenticate \
-H 'content-type: multipart/form-data' \
-F 'email=john.doe@example.com' -F 'password=test123'
{"auth_token":"eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHBpcnkiOjE2MDU4NTE5NjV9.4gkfPzVyMtaUfhcNkX5T2O7dH7ahkgXRl7TeSQ2NHDs"}
```

#### Version
- Ruby 2.7.2
- Rails 6.0.3.4
- Sqlite3

#### How to run the test suite
```
bundle exec rspec
```

# API documents
```
open docs/src/index.html
```

# Client
#### How to start
- Go to client app
```
cd event-app
```
- Init and start
```
# Make sure Node.js is installed.
# If not, install Node.js by referring https://nodejs.org/en/download/
node -v

# Make sure npm is installed.
npm -v

# Make sure yarn is installed by referring https://yarnpkg.com/
yarn -v

# Initial setup
yarn

# Set user token
curl -X POST http://localhost:3000/api/v1/authenticate \
-H 'content-type: multipart/form-data' \
-F 'email=john.doe@example.com' -F 'password=test123'

# Export token
export TOKEN="xxx"
( For example: export TOKEN="eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHBpcnkiOjE2MDU4NTUyMTV9.MyJWTMf_etId88AbDn6sQOR0_iNLW03oQAGCTVweJoI")

# Set Token
sed -i.bu "s/USER_FIXED_TOKEN/$TOKEN/g" src/index.js

# Run app
yarn start

# Open app
open http://localhost:3006
```

![alt text](screenshot.png "Image")

#### Version
- npm 6.14.8
- node v14.15.0
- yarn 1.22.10

# How to add new user
- Add user
```
rails c
Running via Spring preloader in process 43724
Loading development environment (Rails 6.0.3.4)
irb(main):001:0> User.create(email: 'vanhung.pham@example.com', password: 'test123')
```
- Update this token for client
```
curl -X POST http://localhost:3000/api/v1/authenticate \
-H 'content-type: multipart/form-data' \
-F 'email=vanhung.pham@example.com' -F 'password=test123'

{"auth_token":"eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJleHBpcnkiOjE2MDU4NTcwMzh9.cZs8D5n9ZlPYBUcNrCn5qyzVgOgVToYLKR-2nwWiJ4o"}%

# Set Token in file event-app/src/index.js
const token = "token"
```