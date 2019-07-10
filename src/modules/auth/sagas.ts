/**
 * Authentication sagas.
 * 
 * Responsible for the process of logging in, refreshing tokens and logging out.
 */

import { take, call, put, race, select, delay } from 'redux-saga/effects'
import * as actions from './actions'
import { authenticate, refresh } from './functions'
import { LoginRequestPayload } from './actions'
import { SagaIterator } from 'redux-saga'
import { AccessToken } from './types'

import { accessTokenSelector } from './selectors'

/** Saga handling the state of being logged out. */
function* loggedOutSaga(): SagaIterator {
	let loginAction = yield take(actions.loginRequest)

	try {
		let login = loginAction.payload as LoginRequestPayload
		let raceResult = yield race({
			login: call(authenticate, login.username, login.password),
			logout: take(actions.logoutRequest),
		})

		if (raceResult.login) {
			let accessToken = raceResult.login as AccessToken

			yield put(actions.loggedIn(accessToken))
		} else if (raceResult.logout) {
			yield put(actions.loggedOut())
		}
	} catch (error) {
		yield put(actions.loginError(error))
	}
}

/** Saga handling the state of being logged in. */
function* loggedInSaga(): SagaIterator {
	try {
		let raceResult = yield race({
			logout: take(actions.logoutRequest),
			refresh: call(refreshToken),
		})

		if (raceResult.logout) {
			yield put(actions.loggedOut())
		}
	} catch (error) {
		yield put(actions.loggedInError(error))
		yield put(actions.loggedOut())
	}
}

/** Yields a boolean result, whether there is a user logged in or not. */
function* loggedIn(): SagaIterator {
	let accessToken = (yield select(accessTokenSelector)) as ReturnType<typeof accessTokenSelector>
	return accessToken !== undefined
}

function* refreshToken(): SagaIterator {
	let accessToken = (yield select(accessTokenSelector)) as ReturnType<typeof accessTokenSelector>
	if (!accessToken) {
		throw new Error('Not logged in')
	}

	let waitTime = accessToken.refreshAt - Date.now()
	yield call(delay, waitTime)

	let refreshedAccessToken = (yield call(refresh, accessToken.refresh_token)) as AccessToken
	if (refreshedAccessToken) {
		yield put(actions.loggedIn(refreshedAccessToken))
	} else {
		yield put(actions.loggedInError(new Error('Failed to refresh access token')))
	}
}

export default function* saga(): SagaIterator {
	while (true) {
		let isLoggedIn = (yield call(loggedIn)) as boolean

		if (isLoggedIn) {
			yield call(loggedInSaga)
		} else {
			yield call(loggedOutSaga)
		}
	}
}
