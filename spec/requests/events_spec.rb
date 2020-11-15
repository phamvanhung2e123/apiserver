require 'rails_helper'
RSpec.describe 'Events API', type: :request do
  # initialize test data
  let!(:events) { create_list(:event, 10) }

  # Test suite for GET /todos
  describe 'GET /api/v1/events' do
    # make HTTP get request before each example
    before { get '/api/v1/events' }

    it 'returns events' do
      # Note `json` is a custom helper to parse JSON responses
      expect(JSON.parse(response.body)["results"]).not_to be_empty
      expect(JSON.parse(response.body)["results"].size).to eq(10)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end
end