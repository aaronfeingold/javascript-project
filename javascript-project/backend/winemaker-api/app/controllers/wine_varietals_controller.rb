class WineVarietalsController < ApplicationController
  before_action :set_wine_varietal, only: [:show, :update, :destroy]

  # GET /wine_varietals
  def index
    @wine_varietals = WineVarietal.all

    render json: @wine_varietals, include: [:wine, :varietal]
  end

  # GET /wine_varietals/1
  def show
    render json: @wine_varietal
  end

  # POST /wine_varietals
  def create
    @wine_varietal = WineVarietal.new(wine_varietal_params)

    if @wine_varietal.save
      render json: @wine_varietal, status: :created, location: @wine_varietal
    else
      render json: @wine_varietal.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /wine_varietals/1
  def update
    if @wine_varietal.update(wine_varietal_params)
      render json: @wine_varietal
    else
      render json: @wine_varietal.errors, status: :unprocessable_entity
    end
  end

  # DELETE /wine_varietals/1
  def destroy
    @wine_varietal.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_wine_varietal
      @wine_varietal = WineVarietal.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def wine_varietal_params
      params.require(:wine_varietal).permit(:wine_id, :varietal_id)
    end
end
