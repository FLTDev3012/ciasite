class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home, :nosservices, :projects, :estimation, :about, :test]

  def home
    @latest_projects = Project.order(created_at: :desc).limit(3)
  end

  def nosservices
  end

  def projects
  end

  def estimation
  end

  def about
  end

  def test
  end

end
