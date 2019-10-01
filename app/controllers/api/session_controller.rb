class SessionController < ApplicationController
    def create
        user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if user
            login!(user)
            render json: "login success!!"
        else
            render json: "Invalid Credentials", status: 422
        end
    end

    def destroy
        if current_user
            logout!
            render json: "bye"
        else
            render json: "Nobody is logged in", status: 404
        end
    end
end