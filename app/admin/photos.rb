ActiveAdmin.register Photo do
  show do
    attributes_table do
        row :name
        row :description
        row :image do
          image_tag(photo.image.url)
        end
        row :image_file_name
        row :image_file_size
        row :image_content_type
        row :image_updated_at
        
      end
      active_admin_comments
  end


  form :partial => "photoform"
end
