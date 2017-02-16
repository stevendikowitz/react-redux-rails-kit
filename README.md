# Readme

Clone this starter kit to save time on creating a new React/Redux project. Uses:
* [create-react-app]()
* Rails 5 for API [set up following this guide](https://www.fullstackreact.com/articles/how-to-get-create-react-app-to-work-with-your-rails-api/)
* Redux
* PostgresSQ:

## Setup
*note*: You'll need to have a number of dependencies installed to get this going.

1. `git clone` this repo and `cd` into the directory.
2. `bundle install && cd frontend && npm install && cd ..`
3. `bundle exec rake db:create db:migrate`
4. `rake start`
