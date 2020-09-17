require 'test_helper'

class WinesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @wine = wines(:one)
  end

  test "should get index" do
    get wines_url, as: :json
    assert_response :success
  end

  test "should create wine" do
    assert_difference('Wine.count') do
      post wines_url, params: { wine: { name: @wine.name, vintage: @wine.vintage } }, as: :json
    end

    assert_response 201
  end

  test "should show wine" do
    get wine_url(@wine), as: :json
    assert_response :success
  end

  test "should update wine" do
    patch wine_url(@wine), params: { wine: { name: @wine.name, vintage: @wine.vintage } }, as: :json
    assert_response 200
  end

  test "should destroy wine" do
    assert_difference('Wine.count', -1) do
      delete wine_url(@wine), as: :json
    end

    assert_response 204
  end
end
