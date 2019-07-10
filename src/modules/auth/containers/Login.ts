/**
 * Container template for a component.
 */

/* Import the component from the component path */
import Component from '../components/Login'

import { connect } from 'react-redux'
import { Dispatch, Action } from 'redux'

/* Import RootStoreState */
import { RootStoreState } from 'modules/root'

/* Import module files */
import * as actions from '../actions'
import { accessTokenSelector } from '../selectors'

/**
 * Interface for properties that the container passes to the component.
 */
export interface Props {
	loggedIn: boolean
	error?: Error
}

/**
 * Interface for action callbacks that the container exposes to the component.
 * The component's `this.props` is typed `Props & Actions`.
 */
export interface Actions {
	onLogin: (username: string, password: string) => void
	onLogout: () => void
}

/** Populate the Props from the store state. */
const mapStateToProps = (state: RootStoreState): Props => {
	return {
		loggedIn: accessTokenSelector(state) !== undefined,
		error: state.auth.error,
	}
}

/** Populate the Actions with the callbacks for the component. */
const mapDispatchToProps = (dispatch: Dispatch<Action>): Actions => ({
	onLogin: (username, password) => {
		dispatch(actions.loginRequest({ username, password }))
	},
	onLogout: () => {
		dispatch(actions.logoutRequest())
	},
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
