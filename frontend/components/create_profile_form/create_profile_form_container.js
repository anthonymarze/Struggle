import { createProfile } from '../../actions/session_actions';
import { connect } from 'react-redux';
import CreateProfileForm from './create_profile_form';

const msp = ({ errors }) => {
    return {
        errors: errors.session
    };
};

const mdp = (dispatch) => {
    return {
        processForm: (user) => dispatch(createProfile(user))
    };
};

export default connect(msp, mdp)(CreateProfileForm);