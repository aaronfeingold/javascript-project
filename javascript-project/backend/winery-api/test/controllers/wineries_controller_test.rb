require 'test_helper'

class WineriesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @winery = wineries(:one)
  end

  test "should get index" do
    get wineries_url, as: :json
    assert_response :success
  end

  test "should create winery" do
    assert_difference('Winery.count') do
      post wineries_url, params: { winery: { name: @winery.name } }, as: :json
    end

    assert_response 201
  end

  test "should show winery" do
    get winery_url(@winery), as: :json
    assert_response :success
  end

  test "should update winery" do
    patch winery_url(@winery), params: { winery: { name: @winery.name } }, as: :json
    assert_response 200
  end

  test "should destroy winery" do
    assert_difference('Winery.count', -1) do
      delete winery_url(@winery), as: :json
    end

    assert_response 204
  end
end
