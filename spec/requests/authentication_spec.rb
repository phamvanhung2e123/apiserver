require 'rails_helper'
RSpec.describe 'Authentication API', type: :request do
  # initialize test data
  let!(:user) { create(:user) }

  # Test suite for GET /todos
  describe 'POST /api/v1/authenticate' do
    let(:valid_attributes) { { email: user.email, password: "ttttt" } }
    before { post '/api/v1/authenticate', params: valid_attributes }

    it 'returns token' do
      expect(JsonWebToken.decode(JSON.parse(response.body)["auth_token"])["user_id"]).to eq user.id
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end
end