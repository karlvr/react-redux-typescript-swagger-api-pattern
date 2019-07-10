/**
 * Reducer for authentication.
 * 
 * Responsible for updating our authentication status in the Redux state.
 */

import { reducerWithInitialState } from 'typescript-fsa-reducers/dist'
import * as actions from './actions'
import { AccessToken } from './types'

/** The store state for the auth module. */
export interface StoreState {
	readonly accessToken?: AccessToken
	readonly error?: Error
}

const INITIAL_STATE: StoreState = {
	accessToken: undefined,
}

export const reducer = reducerWithInitialState(INITIAL_STATE)

/* The user has been logged in: store the access token in the state. */
reducer.case(actions.loggedIn, (state, accessToken) => {
	return { ...state, accessToken }
})

/* The user has been logged out; remove our stored access token from the state. */
reducer.case(actions.loggedOut, (state) => {
	return { ...state, accessToken: undefined }
})

reducer.case(actions.loginError, (state, error) => {
	return { ...state, error: error }
})

reducer.case(actions.loginRequest, (state) => {
	return { ...state, error: undefined }
})
    
