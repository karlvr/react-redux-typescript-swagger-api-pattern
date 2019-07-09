/**
 * Container template for a component.
 */
import { RootStoreState } from 'modules/index';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Component from '../components/Login';
import { accessTokenSelector } from '../selectors';

/**
 * Interface for properties that the container passes to the component.
 */
export interface Props {
    loggedIn: boolean;
    error?: Error;
}

/**
 * Interface for action callbacks that the container exposes to the component.
 * The component's `this.props` is typed `Props & Actions`.
 */
export interface Actions {
    onLogin: (username: string, password: string) => void;
    onLogout: () => void;
}

/** Populate the Props from the store state. */
const mapStateToProps = (state: RootStoreState): Props => {
    return {
        loggedIn: accessTokenSelector(state) !== undefined,
        error: state.auth.error,
    };
};

/** Populate the Actions with the callbacks for the component. */
const mapDispatchToProps = (dispatch: any): Actions => ({
    onLogin: (username, password) => {
        dispatch(actions.loginRequest({ username, password }));
    },
    onLogout: () => {
        dispatch(actions.logoutRequest());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
