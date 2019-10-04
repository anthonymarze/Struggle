import { login, removeSessionErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';
import SessionForm from './session_form';

const msp = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'login',
        oppFormType: 'signup',
    };
};

const mdp = (dispatch) => {
    return {
        processForm: (user) => dispatch(login(user)),
        removeSessionErrors: () => dispatch(removeSessionErrors()),
    };
};

export default connect(msp, mdp)(SessionForm);