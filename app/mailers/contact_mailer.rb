class ContactMailer < ApplicationMailer
  default from: 'no-reply@unlockhorizons.com'

  def send_message
    @name = params[:name]
    @message = params[:message]
    @phone = params[:phone]
    @sender_email = params[:email]

    mail(to: 'dorian3012@hotmail.fr', subject: 'Unlock Horizons message de contact')
  end
end
