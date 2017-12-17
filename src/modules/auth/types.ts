/**
 * Type definitions for the authentication module.
 */

/** The OAuth2 access token.
 * 
 * Properties are marked as readonly because we store the access token in the Redux state.
 */
export interface AccessToken {
    readonly access_token: string;
    readonly token_type: string;
    readonly expires_in: number;
    readonly refresh_token: string;

    /** The timestamp (ms) at which we intend to refresh our access token. */
    readonly refreshAt: number;
}

/**
 * Configuration for the OAuth 2 functions.
 */
export interface Config {
    readonly apiBase: string;
    readonly clientId: string;
    readonly clientSecret: string;
}
