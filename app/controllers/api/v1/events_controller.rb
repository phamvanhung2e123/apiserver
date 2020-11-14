class Api::V1::EventsController < ActionController::API
  def index
    events = Event.all
    render json: { results: events }.to_json, status: :ok
  end
end