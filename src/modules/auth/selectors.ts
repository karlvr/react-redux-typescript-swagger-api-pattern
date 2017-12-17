/**
 * Store state selectors for the authentication module.
 */

import { RootStoreState } from '../index';

/**
 * 
 * @param state Select the current auth access token from the root store state.
 */
export const accessTokenSelector = (state: RootStoreState) => state.auth.accessToken;
