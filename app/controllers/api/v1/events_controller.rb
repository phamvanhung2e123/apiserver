class Api::V1::EventsController < Api::ApplicationController

  def index
    events = Event.all
    render json: { results: events }.to_json, status: :ok
  end

end