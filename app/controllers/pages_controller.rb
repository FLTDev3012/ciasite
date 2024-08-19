class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home, :nosservices, :projects, :test]

  def home
  end

  def nosservices
  end

  def projects
  end

  def test
  end

end
