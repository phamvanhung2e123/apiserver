class Api::V1::AuthenticationController < Api::ApplicationController
  def authenticate
    command = AuthenticateUser.call(
      params[:email], params[:password])

    if command.success?
      render json: { auth_token: command.result }
    else
      render json: { error: command.errors }, status: :unauthorized
    end
  end

end