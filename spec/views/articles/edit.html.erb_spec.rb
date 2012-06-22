require 'spec_helper'

describe "articles/edit" do
  before(:each) do
    @article = assign(:article, stub_model(Article,
      :Title => "MyString",
      :Content => "MyText"
    ))
  end

  it "renders the edit article form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form", :action => articles_path(@article), :method => "post" do
      assert_select "input#article_Title", :name => "article[Title]"
      assert_select "textarea#article_Content", :name => "article[Content]"
    end
  end
end
