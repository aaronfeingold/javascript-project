require 'test_helper'

class VineyardsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @vineyard = vineyards(:one)
  end

  test "should get index" do
    get vineyards_url, as: :json
    assert_response :success
  end

  test "should create vineyard" do
    assert_difference('Vineyard.count') do
      post vineyards_url, params: { vineyard: { acreage: @vineyard.acreage, name: @vineyard.name, winery_id: @vineyard.winery_id } }, as: :json
    end

    assert_response 201
  end

  test "should show vineyard" do
    get vineyard_url(@vineyard), as: :json
    assert_response :success
  end

  test "should update vineyard" do
    patch vineyard_url(@vineyard), params: { vineyard: { acreage: @vineyard.acreage, name: @vineyard.name, winery_id: @vineyard.winery_id } }, as: :json
    assert_response 200
  end

  test "should destroy vineyard" do
    assert_difference('Vineyard.count', -1) do
      delete vineyard_url(@vineyard), as: :json
    end

    assert_response 204
  end
end
