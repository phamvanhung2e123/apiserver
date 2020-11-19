class Api::V1::UsersController < Api::ApplicationController
  before_action :authenticate_request
  def index
    render json: { results: @current_api_user }.to_json, status: :ok
  end

end