import { signup, removeSessionErrors, receiveSessionErrors } from '../../actions/session_actions';
import { verifyEmail } from '../../util/session_api_util';
import { connect } from 'react-redux';
import SessionForm from './session_form';

const msp = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'signup',
        oppFormType: 'login',
    };
};

const mdp = (dispatch) => {
    return {
        processForm: (user) => dispatch(signup(user)),
        removeSessionErrors: () => dispatch(removeSessionErrors()),
        verifyEmail: (email) => verifyEmail(email),
        receiveSessionErrors: (errors) => dispatch(receiveSessionErrors(errors)),
    };
};

export default connect(msp, mdp)(SessionForm);