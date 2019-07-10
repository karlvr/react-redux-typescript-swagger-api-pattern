/**
 * Functions for sending OAuth2 requests to the server.
 */

import { AccessToken, Config } from './types'

/** The authentication module config, with default values.
 * Use the setConfig method to update the config.
 */
let config: Config = {
	apiBase: '/auth',
	clientId: 'test',
	clientSecret: 'secret',
}

/** How many seconds before the access token expires do we refresh it */
const REFRESH_TOKEN_WINDOW = 60

function fetchAccessToken(options: RequestInit): Promise<AccessToken> {
	return fetch(config.apiBase + '/token', options)
		.then(response => {
			if (response.ok) {
				return response.json()
			} else {
				let contentType = response.headers.get('Content-Type')
				if (contentType && contentType.indexOf('json') !== -1) {
					return response.json().then(msg => {
						if (msg.error) {
							throw new Error('Auth request failed: ' + msg.error)
						} else {
							throw new Error('Auth request failed: ' + response.statusText)
						}
					})
				} else {
					throw new Error('Auth request failed: ' + response.statusText)
				}
			}
		})
		.then(json => json as AccessToken)
		.then(accessToken => {
			/* Add the refreshAt date to the token, so we know when to refresh it */
			const result: AccessToken = {
				...accessToken,
				refreshAt: Date.now() + (accessToken.expires_in - REFRESH_TOKEN_WINDOW) * 1000,
			}
			return result
		})
}

/** Attempt to obtain an AccessToken with the given credentials. */
export function authenticate(username: string, password: string): Promise<AccessToken> {
	let formData = new URLSearchParams()
	formData.append('client_id', config.clientId)
	formData.append('client_secret', config.clientSecret)
	formData.append('grant_type', 'password')
	formData.append('username', username)
	formData.append('password', password)

	let options: RequestInit = {
		method: 'POST',
		body: formData,
	}
	return fetchAccessToken(options)
}

/** Attempt to refresh the AccessToken using the given refresh token.
 * Returns a new AccessToken.
 */
export function refresh(refreshToken: string): Promise<AccessToken> {
	let formData = new URLSearchParams()
	formData.append('client_id', config.clientId)
	formData.append('client_secret', config.clientSecret)
	formData.append('grant_type', 'refresh_token')
	formData.append('refresh_token', refreshToken)

	let options: RequestInit = {
		method: 'POST',
		body: formData,
	}
	return fetchAccessToken(options)
}

export function setConfig(newConfig: Config) {
	config = newConfig
}
