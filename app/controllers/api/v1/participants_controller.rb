class Api::V1::ParticipantsController < Api::ApplicationController
  before_action :authenticate_request

  def index
    event = Event.find_by(id: params[:event_id])
    if event == nil
      render json: { results: [] }.to_json, status: :bad_request
      return
    end
    participants = Participant.where(event_id: event.id).to_a
    render json: { results: participants }.to_json, status: :ok
  end

  def create
    event = Event.find_by(id: params[:event_id])
    if event == nil
      render json: { results: [] }.to_json, status: :bad_request
      return
    end
    participant = Participant.create(user: @current_api_user, event: event)
    render json: {results: participant}.to_json, status: :created
  end
end