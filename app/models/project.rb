class Project < ActiveRecord::Base
  extend FriendlyId
  friendly_id :title, use: :slugged
  has_attached_file :image, styles: { medium: "500x500" }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
end
