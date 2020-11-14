class Api::V1::EventsController < Api::ApplicationController
  before_action :authenticate_request, only: [:index]

  def index
    events = Event.all
    render json: { results: events }.to_json, status: :ok
  end

end