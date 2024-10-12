class ContactMailer < ApplicationMailer
  default from: 'unlockhorizons@gmail.com'

  def send_message
    @contact = params[:contact] # Accéder aux données de contact

    mail(to: 'dorian3012@hotmail.fr', subject: 'Nouveau message de contact')
  end
end
