require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Testdevise
  class Application < Rails::Application
    config.generators do |generate|
      generate.assets false
      generate.helper false
      generate.test_framework :test_unit, fixture: false
    end
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")
    # Ajouter cette ligne pour activer la prise en charge de plusieurs langues
    config.i18n.available_locales = [:en, :fr] # Les langues disponibles (anglais et français)
    config.i18n.default_locale = :en           # Langue par défaut (anglais)

    # Cela permet de détecter automatiquement la langue par rapport aux paramètres de l'URL
    config.i18n.fallbacks = true              # En cas de traduction manquante, il utilisera la langue par défaut
  end
end
