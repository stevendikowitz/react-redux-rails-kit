# README

Clone this starter kit to save time on creating a new React/Redux project. Uses:
* [create-react-app]()
* Rails 5 for API [set up following this guide](https://www.fullstackreact.com/articles/how-to-get-create-react-app-to-work-with-your-rails-api/)
* [Redux](https://github.com/reactjs/redux)
* [PostgresSQL](https://www.postgresql.org/about/)

# Setup
*note*: You'll need to have a number of dependencies installed to get this going.

1. `git clone` this repo and `cd` into the directory.
2. `bundle install && cd frontend && npm install && cd ..`
3. `bundle exec rake db:create db:migrate`
4. `rake start`

# Contribute
I use this for my personal projects but welcome any addition to reducer boilerplate and make getting new projects up and running faster.
