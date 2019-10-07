class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def verify_email
        user = User.find_by(email: params[:email])
        if user
            render json: ["Email has already been taken"], status: 422
        end            
    end

    private

    def user_params
        params.require(:user).permit(:email, :password, :first_name, :last_name, :birthday, :gender)
    end
end