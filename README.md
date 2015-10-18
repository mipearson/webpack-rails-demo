# webpack-rails-demo

This repository demonstrates basic use of [webpack-rails](https://github.com/mipearson/webpack-rails) in a Rails 4.2 application.

Even though it demonstrates **webpack-rails** coexisting with sprockets, sprockets is not required or used by **webpack-rails**.

## Usage

``` bash
git clone https://github.com/mipearson/webpack-rails-demo.git
cd webpack-rails-demo
bundle install
npm install
foreman start
```

Then open [localhost:3000](http://localhost:3000) in your browser. If everything is working, you should see "Sprockets works!" and "Webpack works!"

## Steps Taken

1. Created new rails project:
    `rails new --skip-keeps --skip-active-record --skip-spring --skip-turbolinks --skip-test-unit webpack-rails-demo`
1. Remove files, gems unnecessary for the demo
1. Added `webpack-rails` to the `Gemfile` and ran `bundle install`
1. Ran `bundle exec rails generate webpack_rails:install`
1. Added controller, routes and views for "Welcome" page
1. Added sprockets-based javascript for "Welcome" page
1. Edited `webpack/application.js`
1. Added `*webpack_asset_paths` to `index.html.erb` to load webpacked javascript
1. Ran `foreman start`
1. Opened [localhost:3000](http://localhost:3000), confirmed that both Sprockets & Webpack are loaded
