import { login } from '../../actions/session_actions';
import { connect } from 'react-redux';
import SessionForm from './session_form';

const msp = () => {
    return {
        formType: 'login'
    };
};

const mdp = (dispatch) => {
    return {
        processForm: (user) => dispatch(login(user))
    };
};

export default connect(msp, mdp)(SessionForm);