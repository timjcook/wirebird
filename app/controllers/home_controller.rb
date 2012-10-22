class HomeController < ApplicationController

  def index
    @blog_posts = BlogPost.all
    @admin = AdminUser.new(:email => 'test@wirebirdmelbourne.com')
    @admin.save
     
  end

end
