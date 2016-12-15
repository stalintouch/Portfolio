class WelcomeController < ApplicationController

  def index
    @posts = Post.all.limit(3).order("created_at DESC")
    @projects = Project.all.order("created_at DESC")
    @array = ["display-app-1", "display-app-2", "display-app-3", "display-app-4", "display-app-5", "display-app-6", "display-app-7", "display-app-7", "display-app-9", "display-app-10", "display-app-11", "display-app-12"]
  end


end
