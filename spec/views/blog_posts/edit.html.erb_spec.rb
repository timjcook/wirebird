require 'spec_helper'

describe "blog_posts/edit" do
  before(:each) do
    @blog_post = assign(:blog_post, stub_model(BlogPost,
      :Title => "MyString",
      :Content => "MyText"
    ))
  end

  it "renders the edit blog_post form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form", :action => blog_posts_path(@blog_post), :method => "post" do
      assert_select "input#blog_post_Title", :name => "blog_post[Title]"
      assert_select "textarea#blog_post_Content", :name => "blog_post[Content]"
    end
  end
end
