import { signup } from '../../actions/session_actions';
import { connect } from 'react-redux';
import CreateProfileForm from './create_profile_form';

const msp = ({ errors, email, password }) => {
    return {
        errors: errors.session,
        email: email,
        password: password,
    };
};

const mdp = (dispatch) => {
    return {
        processForm: (user) => dispatch(signup(user))
    };
};

export default connect(msp, mdp)(CreateProfileForm);