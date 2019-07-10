import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Provider } from 'react-redux'
import { getStore } from 'modules/root'
import Login from 'modules/auth/containers/Login'
import Petstore from 'modules/petstore/containers/Petstore'
import Example from 'modules/template/containers/Example'

const App: React.FC = () => {
	return (
		<Provider store={getStore()}>
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
            Edit <code>src/App.tsx</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
            Learn React
					</a>
					<Login />
					<Example />
					<Petstore />
				</header>
			</div>
		</Provider>
	)
}

export default App
