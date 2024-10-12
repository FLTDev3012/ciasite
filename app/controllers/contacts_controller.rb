class ContactsController < ApplicationController
  def create
    # Appel du mailer avec les paramètres du formulaire
    ContactMailer.with(contact_params).send_message.deliver_now

    # Redirige l'utilisateur avec un message de succès
    redirect_to about_path, notice: "Votre message a été envoyé avec succès!"
  end

  private

  # Méthode pour filtrer les paramètres
  def contact_params
    params.permit(:name, :email, :phone, :message)
  end
end
