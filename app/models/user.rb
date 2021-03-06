class User < ApplicationRecord
    validates :email, :password_digest, :session_token, :first_name, :last_name, :birthday, presence: true
    validates :email, :session_token, uniqueness: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :password, length: { minimum: 8, allow_nil: true }
    validates :gender, inclusion: {in: ['Male', 'Female', 'Other'], allow_blank: true}

    after_initialize :ensure_session_token

    attr_reader :password

    has_many :routes,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'Route'

    has_many :activities,
    primary_key: :id,
    foreign_key: :athlete_id,
    class_name: 'Activity'

    def self.generate_session_token
        SecureRandom::urlsafe_base64(16)
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user && user.is_password?(password)
        user
    end

    def password=(password)
        @password = password 
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        bc_pass = BCrypt::Password.new(self.password_digest)
        bc_pass.is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

    def reset_session_token!
        self.session_token = self.class.generate_session_token
        self.save!
        self.session_token
    end
end