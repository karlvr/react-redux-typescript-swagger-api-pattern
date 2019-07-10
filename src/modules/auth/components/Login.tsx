/**
 * Component template.
 * 
 * Note that this file has a `.tsx` suffix, as it contains React elements.
 */

import * as React from 'react'
import { Props, Actions } from '../containers/Login'
import { ChangeEvent } from 'react'

/**
 * Interface for private internal component state.
 */
interface State {
	username: string
	password: string
}

/**
 * The initial state for our internal component state.
 */
const INITIAL_STATE: State = {
	username: '',
	password: '',
}

export default class Example extends React.Component<Props & Actions, State> {

	public state = INITIAL_STATE

	public render() {
		const { loggedIn, error } = this.props

		return (
			<div>
				{loggedIn ? (
					<div>
						<p>Logged in</p>
						<button onClick={this.doLogout}>Logout</button>
					</div>
				) : (
					<div>
						<p>
							<input
								type="text"
								name="username"
								placeholder="Username"
								onChange={this.handleUsername}
								value={this.state.username}
							/>
							<input
								type="password"
								name="password"
								onChange={this.handlePassword}
								defaultValue={this.state.password}
							/>
							<button onClick={this.doLogin}>Login</button>
						</p>
					</div>
				)}
				{error && (
					<div>{error.message}</div>
				)}
			</div>
		)
	}

	private doLogin = () => {
		this.props.onLogin(this.state.username, this.state.password)
	}

	private doLogout = () => {
		this.props.onLogout()
	}

	private handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
		this.setState({
			username: e.target.value,
		})
	}

	private handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
		this.setState({
			password: e.target.value,
		})
	}
}
