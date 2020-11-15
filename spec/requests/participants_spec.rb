require 'rails_helper'
RSpec.describe 'Participants API', type: :request do
  # initialize test data
  let!(:events) { create_list(:event, 10) }
  let(:event_id) { events.first.id }
  let(:user) { create(:user) }
  # Test suite for GET /todos
  describe 'GET /api/v1/events/:event_id/participants' do
    # make HTTP get request before each example
    it 'returns status code unauthorized' do
      get '/api/v1/events/'+event_id.to_s+'/participants'
      expect(response).to have_http_status(:unauthorized)
    end

    context "when empty list" do
      it 'returns status code 20' do
        jwt = JsonWebToken.encode(user_id: user.id)
        get '/api/v1/events/'+event_id.to_s+'/participants', headers: { "Authorization" => "Bearer #{jwt}" }
        expect(JSON.parse(response.body)["results"]).to be_empty
        expect(response).to have_http_status(:ok)
      end
    end

    context "when have list" do
      it 'returns status code 20 and list user' do
        jwt = JsonWebToken.encode(user_id: user.id)
        (1..5).each { |i|
          fake_user = FactoryBot.create(:user)
          FactoryBot.create(:participant, event_id: event_id, user_id: fake_user.id)
        }
        get '/api/v1/events/'+event_id.to_s+'/participants', headers: { "Authorization" => "Bearer #{jwt}" }
        expect(JSON.parse(response.body)["results"]).not_to be_empty
        expect(JSON.parse(response.body)["results"].size).to eq(5)
        expect(response).to have_http_status(:ok)
      end
    end
  end
end