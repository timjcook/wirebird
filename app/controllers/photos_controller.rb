class PhotosController < ApplicationController
  def index 
    FlickRaw.api_key="66858a92d30f89139f9bf9c174f75e7a"
    FlickRaw.shared_secret="71400c74ed8c50ec"
    id = flickr.people.findByUsername(:username => "wirebird-music").id
    @photos = flickr.photos.search(:user_id => id)
  end
end
