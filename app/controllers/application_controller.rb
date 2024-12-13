class ApplicationController < ActionController::Base
  before_action :authenticate_user!
  before_action :set_locale

  private

  def set_locale
    I18n.locale = params[:locale] || extract_locale_from_header || I18n.default_locale
  end

  def extract_locale_from_header
    locale = request.env['HTTP_ACCEPT_LANGUAGE']&.scan(/^[a-z]{2}/)&.first
    I18n.available_locales.map(&:to_s).include?(locale) ? locale : nil
  end

  def default_url_options
    { locale: I18n.locale }.merge(super)
  end
end
