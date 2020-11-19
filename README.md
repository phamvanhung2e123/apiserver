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
- ruby 2.7.2
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
#### Version
```
# Make sure Node.js is installed.
# If not, install Node.js by referring https://nodejs.org/en/download/
node -v

# Make sure npm is installed.
npm -v

# Make sure yarn is installed by referring https://yarnpkg.com/
yarn -v

# Initial setup
npm ci

# Run app
npm start

# Open app
open http://localhost:3006
```

![alt text](screenshot.png "Image")

#### Version
- npm 6.14.8
- node v14.15.0
- yarn 1.22.10

