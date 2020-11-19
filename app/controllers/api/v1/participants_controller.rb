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

  def list
    participants = Participant.where(user_id: @current_api_user.id).to_a
    render json: { results: participants }.to_json, status: :ok
  end

  def create
    event = Event.find_by(id: params[:event_id])
    if event == nil
      render json: { results: [] }.to_json, status: :bad_request
      return
    end
    exist = Participant.find_by(user_id: @current_api_user.id, event_id: event.id)
    if exist != nil
      render json: { results: [] }.to_json, status: :bad_request
      return
    end
    participant = Participant.create(user_id: @current_api_user.id, event_id: event.id)
    UserMailer.with(user: @current_api_user).welcome_email.deliver_now
    render json: {results: participant}.to_json, status: :created
  end

  def destroy
    event = Event.find_by(id: params[:event_id])
    participant = Participant.find_by(id: params[:id])
    if event == nil || participant == nil
      render json: { results: [] }.to_json, status: :bad_request
      return
    end
    participant.destroy
    render json: {results: "ok"}.to_json, status: :ok
  end
end