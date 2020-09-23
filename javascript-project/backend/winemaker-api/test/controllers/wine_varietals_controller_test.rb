require 'test_helper'

class WineVarietalsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @wine_varietal = wine_varietals(:one)
  end

  test "should get index" do
    get wine_varietals_url, as: :json
    assert_response :success
  end

  test "should create wine_varietal" do
    assert_difference('WineVarietal.count') do
      post wine_varietals_url, params: { wine_varietal: { varietal_id: @wine_varietal.varietal_id, wine_id: @wine_varietal.wine_id } }, as: :json
    end

    assert_response 201
  end

  test "should show wine_varietal" do
    get wine_varietal_url(@wine_varietal), as: :json
    assert_response :success
  end

  test "should update wine_varietal" do
    patch wine_varietal_url(@wine_varietal), params: { wine_varietal: { varietal_id: @wine_varietal.varietal_id, wine_id: @wine_varietal.wine_id } }, as: :json
    assert_response 200
  end

  test "should destroy wine_varietal" do
    assert_difference('WineVarietal.count', -1) do
      delete wine_varietal_url(@wine_varietal), as: :json
    end

    assert_response 204
  end
end
