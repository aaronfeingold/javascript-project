class WinesController < ApplicationController
  before_action :set_wine, only: [:show, :update, :destroy]

  # GET /wines
  def index
    @wines = Wine.all

    render json: @wines

    # , :include => {:varietals => {:except => [:created_at, :updated_at]}}, :except => [:updated_at]

  end

  # GET /wines/1
  def show
    render json: @wine
  end

  # POST /wines
  def create
    # binding.pry
    @wine = Wine.new(wine_params)
    # WineVarietal.create(wine_id: @wine.id, varietals_ids: wine_params[:varietals_ids] )
    # @wine.varietals << Varietal.find(wine_params[:varietals_attributes][])
    # @wine.varietals.push(wine_params[:varietals_ids][])
    
    if @wine.save
      render json: @wine, status: :created, location: @wine
    else
      render json: @wine.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /wines/1
  def update
    if @wine.update(wine_params)
      render json: @wine
    else
      render json: @wine.errors, status: :unprocessable_entity
    end
  end

  # DELETE /wines/1
  def destroy
    @wine.destroy
    render body: nil, status: :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_wine
      @wine = Wine.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def wine_params
      params.require(:wine).permit(:name, :vintage, varietal_ids: [])
    end
end
