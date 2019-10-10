class Api::ActivitiesController < ApplicationController
    def index
        @activities = Activity.all.where(athlete_id: current_user.id)
        render :index    
    end

    def show
        @activity = Activity.find(params[:id])
        render :show
    end

    def create
        @activity = current_user.activities.new(activity_params)
        if @activity.save
            render :show
        else
            render json: @activity.errors.full_messages, status: 422
        end
    end

    private

    def activity_params
        params.require(:activity).permit(:distance, :duration, :elevation, :sport, :date_and_time, :title, :description, :exertion, :route_id, :athlete_id)
    end
end