/**
 * Component template.
 * 
 * Note that this file has a `.tsx` suffix, as it contains React elements.
 */

import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectName } from '../selectors'
import { examplePrimitiveAction } from '../actions'

function Example(props: {}) {
	const name = useSelector(selectName)
	const dispatch = useDispatch()

	const [value, setValue] = React.useState('Example')

	function updateRedux(evt: React.MouseEvent) {
		evt.preventDefault()
		dispatch(examplePrimitiveAction(value))
	}

	function updateState(evt: React.MouseEvent) {
		evt.preventDefault()
		setValue(`Example ${Math.random()}`)
	}

	return (
		<div>
			<p>Redux: {name}</p>
			<p>State: {value}</p>
			<button onClick={updateRedux}>Update Redux</button>
			<button onClick={updateState}>Update State</button>
		</div>
	)

}

export default Example
