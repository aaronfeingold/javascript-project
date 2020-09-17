require 'test_helper'

class VarietalsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @varietal = varietals(:one)
  end

  test "should get index" do
    get varietals_url, as: :json
    assert_response :success
  end

  test "should create varietal" do
    assert_difference('Varietal.count') do
      post varietals_url, params: { varietal: { name: @varietal.name, wine_id: @varietal.wine_id } }, as: :json
    end

    assert_response 201
  end

  test "should show varietal" do
    get varietal_url(@varietal), as: :json
    assert_response :success
  end

  test "should update varietal" do
    patch varietal_url(@varietal), params: { varietal: { name: @varietal.name, wine_id: @varietal.wine_id } }, as: :json
    assert_response 200
  end

  test "should destroy varietal" do
    assert_difference('Varietal.count', -1) do
      delete varietal_url(@varietal), as: :json
    end

    assert_response 204
  end
end
