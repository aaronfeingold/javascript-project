class WineriesController < ApplicationController
  before_action :set_winery, only: [:show, :update, :destroy]

  # GET /wineries
  def index
    @wineries = Winery.all

    render json: @wineries
  end

  # GET /wineries/1
  def show
    render json: @winery
  end

  # POST /wineries
  def create
    @winery = Winery.new(winery_params)

    if @winery.save
      render json: @winery, status: :created, location: @winery
    else
      render json: @winery.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /wineries/1
  def update
    if @winery.update(winery_params)
      render json: @winery
    else
      render json: @winery.errors, status: :unprocessable_entity
    end
  end

  # DELETE /wineries/1
  def destroy
    @winery.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_winery
      @winery = Winery.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def winery_params
      params.require(:winery).permit(:name)
    end
end
