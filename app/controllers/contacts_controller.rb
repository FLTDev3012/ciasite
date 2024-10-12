class ContactsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:create]

  def create
    # Créez un hash pour stocker les données
    contact_data = {
      name: params[:name],
      email: params[:email],
      phone: params[:phone],
      message: params[:message]
    }

    # Validez les données manuellement
    if valid_contact?(contact_data)
      # Envoyer l'e-mail ici
      ContactMailer.with(contact: contact_data).send_message.deliver_now
      flash[:notice] = "Votre message a été envoyé !"
      redirect_to about_path

    else
      flash.now[:alert] = "Une erreur s'est produite. Veuillez réessayer."
      render :some_view # Remplacez par la vue souhaitée
    end
  end

  private

  def valid_contact?(data)
    # Effectuez les validations ici
    return false if data[:name].blank?
    return false unless valid_email?(data[:email])
    return false if data[:message].blank?

    true
  end

  def valid_email?(email)
    # Utilisez une expression régulière pour valider l'e-mail
    URI::MailTo::EMAIL_REGEXP.match?(email)
  end
end
