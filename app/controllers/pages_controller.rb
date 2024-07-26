class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home, :nosservices]

  def home
  end

  def nosservices
  end

end
