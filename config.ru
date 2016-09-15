require './config/application.rb'
require './config/routes.rb'


use Rack::Static, urls: ['/css', '/js', '/images'], root: 'public'


# run TodoApplication.new

run TodoApplication.new