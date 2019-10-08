class Api::RoutesController < ApplicationController
    def index
        @routes = Route.all.where(author_id: current_user.id)
        render :index    
    end

    def show
        @route = Route.find(params[:id])
        render :show
    end

    def create
        @route = Route.new(route_params)
        if @route.save
            render :show
        else
            render json: @route.errors.full_messages, status: 422
        end
    end

    def destroy
        @route = Route.find_by(name: name, author_id: author_id)
        if @route
            destroy(@route)
        else
            render json: ["Route doesn't exist"], status: 422
        end
    end

    private

    def route_params
        params.require(:routes).permit(:name, :coordinate_string, :author_id)
    end
end