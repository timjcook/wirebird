class CreateBlogPosts < ActiveRecord::Migration
  def change
    create_table :blog_posts do |t|
      t.string :Title
      t.text :Content

      t.timestamps
    end
  end
end
