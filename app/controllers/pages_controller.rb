class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home, :nosservices, :projects]

  def home
  end

  def nosservices
  end

  def projects
  end

end
