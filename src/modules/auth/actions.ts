/**
 * Action creators for authentication.
 */

import actionCreatorFactory from 'typescript-fsa';
import { AccessToken } from './types';

const actionCreator = actionCreatorFactory('Auth');

export interface LoginRequestPayload {
    username: string;
    password: string;
}

/** Action creator for the login request. The payload contains the username and password requested. */
export const loginRequest = actionCreator<LoginRequestPayload>('LOGIN_REQUEST');

/** Action creator for the logout request. */
export const logoutRequest = actionCreator('LOGOUT_REQUEST');

/** The user has been logged in. The payload is the OAuth access token. */
export const loggedIn = actionCreator<AccessToken>('LOGGED_IN');

/** The user has been logged out. */
export const loggedOut = actionCreator('LOGGED_OUT');

/** An error has occurred while trying to login. */
export const loginError = actionCreator<Error>('LOGIN_ERROR');

/** An error has occurred while the user is logged in, either logging out or refreshing the token. */
export const loggedInError = actionCreator<Error>('LOGGED_IN_ERROR');
